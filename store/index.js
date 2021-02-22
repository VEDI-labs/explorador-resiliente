export const state = () => ({
  user: {
    uid: null,
    email: '',
    emailVerified: false
  }
})

export const getters = {
  isAuthenticated (state) {
    return state.user && state.user.uid
  }
}

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    if (authUser) {
      const { uid, email, emailVerified } = authUser
      state.user = { uid, email, emailVerified }
    } else {
      state.user = {
        uid: null,
        email: '',
        emailVerified: false
      }
    }
  }
}

export const actions = {
  onAuthStateChangedAction: (ctx, { authUser, claims }) => {
    if (!authUser) {
      ctx.commit('ON_AUTH_STATE_CHANGED_MUTATION', { authUser: null })
    } else {
      ctx.commit('ON_AUTH_STATE_CHANGED_MUTATION', { authUser, claims })
    }
  }
}
