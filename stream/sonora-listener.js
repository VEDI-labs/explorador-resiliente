const ICE_SERVERS = [{ urls: 'stun:stun1.l.google.com:19302' }, { urls: 'stun:stun.l.google.com:19302' }]

export class SonoraListener {
  constructor (ws) {
    this.connection = ws
    this.onMessage = null
    this.id = null
    this.peers = {}
  }

  listen (id, callback) {
    this.id = id

    const handleMessage = (event) => {
      const data = JSON.parse(event.data)
      switch (data.event) {
        case 'add_peer':
          this._createOffer(data, callback)
          break
        case 'session_description':
          this._setRemoteDescription(data)
          break

        case 'ice_candidate':
          this._addIceCandidate(data)
          break

        case 'remove_peer':
          this._removePeer(data)
          break
      }
    }
    const handleError = (event) => {
      console.error(event)
      this.connection.removeEventListener('error', handleError)
    }

    this.connection.onmessage = handleMessage
    this.connection.onerror = handleError
    this._executeAction('listenradio', {
      id
    })
  }

  async _addIceCandidate (data) {
    const peerId = data.peerId
    const peer = this.peers[peerId]
    const candidate = data.iceCandidate

    try {
      console.log('setting ice candidate', candidate)
      await peer.addIceCandidate(candidate)
    } catch (err) {
      console.log(err)
    }
  }

  async _createOffer (data, callback) {
    console.log('adding peer', data)

    const peerId = data.peerId

    if (this.peers[peerId]) {
      console.log('Already connected to peer', peerId)
      return
    }

    // start a new offer
    const pc = new RTCPeerConnection({
      iceServers: ICE_SERVERS
    })
    pc.addEventListener('connectionstatechange', (e) => {
      if (pc.connectionState === 'connected') {
        console.log('connected')
      } else {
        console.log(e)
      }
    })

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        this._executeAction('relayicecandidate', {
          peerId,
          iceCandidate: event.candidate
        })
      }
    }
    pc.ontrack = (event) => {
      console.log('Track added', data)
      if (callback) {
        callback(event)
      }
    }
    this.peers[peerId] = pc
    const offer = await pc.createOffer({
      offerToReceiveAudio: 1,
      offerToReceiveVideo: 0,
      voiceActivityDetection: false
    })

    await pc.setLocalDescription(offer)

    this._executeAction('listenersession', {
      peerId,
      sessionDescription: pc.localDescription
    })
  }

  _addTracks (data, callback) {
    const peerId = data.peerId
    const peer = this.peers[peerId]
    console.log('Track added', data)

    peer.onTrackAdded = (event) => {
      if (callback) {
        callback(event)
      }
    }
  }

  async _setRemoteDescription (data) {
    try {
      const peerId = data.peerId
      const peer = this.peers[peerId]
      const description = data.sessionDescription

      console.log('setting remote description', description)
      await peer.setRemoteDescription(description)
    } catch (err) {
      console.error(err)
    }
  }

  _removePeer (data) {
    console.log('Signaling server said to remove peer:', data)
    const peerId = data.peerId
    const peer = this.peers[peerId]

    if (peer) {
      peer.close()
      delete this.peers[peerId]
    }
  }

  _executeAction (action, data) {
    this._sendMessage(JSON.stringify({
      action,
      data
    }))
  }

  _sendMessage (data) {
    this.connection.send(data)
  }

  static connect () {
    const ws = new WebSocket(process.env.SIGNAL_SERVER)
    const defer = new Promise((resolve, reject) => {
      const handleOpen = () => {
        ws.removeEventListener('open', handleOpen)
        resolve(new SonoraListener(ws))
      }

      const handleError = (event) => {
        ws.removeEventListener('error', handleError)
        reject(event)
      }

      ws.onopen = handleOpen
      ws.onerror = handleError
    })

    return defer
  }
}
