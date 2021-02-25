<template>
  <div class="container">
    <div>
      <Logo />
      <h1>
        Explorador Resiliente
      </h1>
      <h2>
        Explorador Resiliente
      </h2>
      <h3>
        Explorador Resiliente
      </h3>
      <h4>
        Explorador Resiliente
      </h4>
      <h5>
        Explorador Resiliente
      </h5>
      <h6>
        Explorador Resiliente
      </h6>
      <a href="#">Hola mundo</a>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloribus aut ad aspernatur dolores suscipit quam vel, consequuntur ut quasi aliquam omnis excepturi? Hic cupiditate, similique vel quasi sequi iure?</p>
      <div v-show="isAuthenticated">
        <p>
          Bienvenido {{ user.email }}
        </p>
        <button
          @click="signOut"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated'
    }),
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    async signOut () {
      await this.$fire.auth.signOut()
    }
  }
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
