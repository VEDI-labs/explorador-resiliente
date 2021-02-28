<template>
  <div>
    <div class="mx-auto mb-12 flex flex-center justify-center">
      <Logo width="150" height="115" />
    </div>
    <div
      class="
        Card
        w-5/6 sm:w-5/6 md:w-2/3 lg:w-3/5 xl:w-1/4 2xl:w-1/4
      "
    >
      <h3>Iniciar sesión</h3>
      <validation-observer ref="form" v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(signIn)">
          <validation-provider
            v-slot="{ errors }"
            name="email"
            rules="required|email"
            tag="div"
            vid="email"
          >
            <label
              :class="{ error: errors.length > 0 }"
            >Correo electrónico</label>
            <input
              v-model="email"
              class="form-input"
              name="email"
              placeholder="Ingresa tu correo electrónico"
              type="email"
              :class="{ error: errors.length > 0 }"
              :disabled="uiState === UI_STATES.LOADING"
            >
            <span
              :class="{ error: errors.length > 0 }"
            >{{ errors.join(',') }}</span>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="password"
            rules="required"
            tag="div"
            vid="password"
          >
            <label
              :class="{ error: errors.length > 0 }"
            >Contraseña</label>
            <input
              ref="password"
              v-model="password"
              class="form-input"
              placeholder="Crea una contraseña"
              type="password"
              :class="{ error: errors.length > 0 }"
              :disabled="uiState === UI_STATES.LOADING"
            >
            <span
              :class="{ error: errors.length > 0 }"
            >{{ errors[0] }}</span>
            <a href="#">¿Olvidaste tu contraseña?</a>
          </validation-provider>
          <label>
            <input type="checkbox" class="form-checkbox">
            <span class="ml-2">Recuérdame</span>
          </label>
          <button
            type="submit"
            :disabled="uiState === UI_STATES.LOADING"
          >
            <svg
              v-if="uiState === UI_STATES.LOADING"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              />
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Registrarse
          </button>
        </form>
        <div class="Card-actions">
          <p>¿Aún no tienes una cuenta?</p>
          <a href="#">Regístrate gratis</a>
        </div>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import Logo from '~/components/Logo'

const UI_STATES = {
  BLANK: 'BLANK_STATE',
  ERROR: 'ERROR_STATE',
  LOADING: 'LOADING_STATE',
  IDEAL: 'IDEAL_STATE'
}

export default {
  components: {
    Logo,
    ValidationObserver,
    ValidationProvider
  },
  layout: 'authentication',
  data () {
    return {
      email: '',
      password: '',
      uiState: UI_STATES.BLANK,
      UI_STATES
    }
  },
  methods: {
    async signIn () {
      try {
        this.uiState = UI_STATES.LOADING
        await this.$fire.auth.signInWithEmailAndPassword(
          this.email,
          this.password
        )
        this.uiState = UI_STATES.IDEAL
        this.$router.push('/')
      } catch (error) {
        if (error.code === 'auth/wrong-password') {
          this.$refs.form.setErrors({
            password: ['La contraseña es inválida']
          })
          this.uiState = UI_STATES.IDEAL
        } else if (error.code === 'auth/user-not-found') {
          this.$refs.form.setErrors({
            email: ['El correo electrónico no se encuentra registrado']
          })
          this.uiState = UI_STATES.IDEAL
        } else {
          this.uiState = UI_STATES.ERROR
        }
      }
    }
  }
}
</script>
