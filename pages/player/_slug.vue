<template>
  <div class="stations">
    <h1>Música</h1>
    <section class="current-station">
      <section class="cover">
        <div class="figure-container w-1/4">
          <figure>
            <img :src="picture" alt="Cover">
          </figure>
        </div>
        <h4 class="station-name">
          {{ name }}
        </h4>
        <div v-if="status === 'online'" class="current-device bg-red-900">
          <IconObject height="24" width="24" color="#ffffff" /><span>En vivo</span>
        </div>
        <div v-else-if="status === 'offline'" class="current-device bg-gray-500">
          <IconObject height="24" width="24" color="#ffffff" /><span>Offline</span>
        </div>
      </section>
      <section class="controls">
        <div class="playback-controls">
          <button
            class="rounded play"
            @click="ConnectStation"
          >
            <IconPlay v-if="isPaused" width="32" height="32" color="#ffffff" />
            <IconPause v-else width="32" height="32" color="#ffffff" />
          </button>
        </div>
        <div
          class="volume-control"
          :style="{
            opacity: status === 'offline' ? 0.5 : 1
          }"
        >
          <IconSpeaker width="32" height="32" color="#0BA882" />
        </div>
        <audio ref="audio" :volume="volume / 100" autoplay="autoplay" />
      </section>
    </section>
  </div>
</template>

<script>
// import VueSlider from 'vue-slider-component'
// import 'vue-slider-component/theme/antd.css'

import IconObject from '~/components/icons/IconObject'
import IconSpeaker from '~/components/icons/IconSpeaker'
import IconPlay from '~/components/icons/IconPlay'
import IconPause from '~/components/icons/IconPause'
import { SonoraListener } from '~/stream/sonora-listener'

export default {
  components: {
    IconObject,
    IconSpeaker,
    IconPlay,
    IconPause
  },
  data () {
    return {
      name: '',
      picture: '',
      id: null,
      status: 'offline',
      isPaused: true,
      volume: 80
    }
  },
  head () {
    return {
      title: `${this.name} | Explorador Resiliente`
    }
  },
  watch: {
    volume () {
      this.$refs.audio.volume = this.volume / 100
    }
  },
  mounted () {
    this.$fire.firestore.collection('stations').doc(this.$route.params.slug).onSnapshot((query) => {
      const data = query.data()
      this.id = query.id
      this.name = data.name
      this.picture = data.picture
      this.status = data.status
    })
  },
  methods: {
    togglePlayer () {
      this.$refs.audio.volume = this.volume / 100
      if (this.isPaused) {
        this.$refs.audio.play()
        this.isPaused = false
      } else {
        this.$refs.audio.pause()
        this.isPaused = true
      }
    },
    SuccessConection (event) {
      this.$refs.audio.srcObject = event.streams[0]
    },
    async ConnectStation () {
      const listener = await SonoraListener.connect()
      listener.listen(this.id, this.SuccessConection)
    }
  }
}
</script>

<style lang="postcss" scoped>
  .stations {
    @apply flex flex-col;
    @apply h-full;
    @apply w-full;

    & h1 {
      @apply self-start;
    }
  }
  .current-station {
    @apply flex flex-col flex-1 justify-center;
  }

  .cover {
    @apply flex flex-col self-center items-center w-full my-4;
  }
  .station-name {
    @apply my-4;
  }
  .controls {
    @apply my-2;
    @apply self-center;
    @apply w-2/5;
  }
  .similar-stations {
    @apply flex flex-col;
    & button {
      @apply self-center;
    }
  }
  .current-device {
    @apply flex;
    @apply px-4 py-2;
    @apply rounded-full;

    & span {
      @apply ml-1;
      @apply text-white;
    }
  }
  .playback-controls {
    @apply flex;
    @apply items-center;
    @apply justify-center;
    @apply mb-12;

    & .play {
      @apply mx-2;
      height: 64px;
      width: 64px;
    }
  }
  .volume-control {
    @apply flex;
    @apply items-center;
    @apply w-full;
  }
</style>
