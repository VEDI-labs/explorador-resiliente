export const state = () => ({
  user: {
    uid: null,
    email: '',
    emailVerified: false,
    profile: {
      bio: '',
      communities: [],
      country: {
        code: '',
        name: ''
      },
      isArtist: '',
      name: '',
      picture: '',
      resilientObjects: []
    }
  }
})

export const getters = {
  isAuthenticated (state) {
    return state.user && state.user.uid && state.user.profile
  }
}

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims, profile }) => {
    if (authUser) {
      const { uid, email, emailVerified } = authUser
      state.user = { uid, email, emailVerified, profile }
    } else {
      state.user = {
        uid: null,
        email: '',
        emailVerified: false,
        profile: {}
      }
    }
  }
}

export const actions = {
  async onAuthStateChangedAction (ctx, { authUser, claims }) {
    if (!authUser) {
      ctx.commit('ON_AUTH_STATE_CHANGED_MUTATION', { authUser: null })
    } else {
      let profile = {}
      if (authUser) {
        const doc = await this.$fire.firestore.collection('profiles').doc(authUser.uid).get()
        if (doc.exists) {
          const data = doc.data()
          profile = {
            bio: data.bio,
            communities: data.communities,
            country: data.country,
            isArtist: data.isArtist,
            name: data.name,
            picture: data.picture,
            resilientObjects: data.resilientObjects
          }
        }
      }
      ctx.commit('ON_AUTH_STATE_CHANGED_MUTATION', { authUser, claims, profile })
    }
  }
}
