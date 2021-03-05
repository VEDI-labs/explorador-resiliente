<template>
  <div>
    <div class="mx-auto my-12 flex flex-center justify-center">
      <Logo width="150" height="115" />
    </div>
    <div
      class="
        Card
        w-5\6 sm:w-5/6 md:w-2/3 lg:w-3/5 xl:w-1/4 2xl:w-1/4
      "
    >
      <h3>Regístrate gratis</h3>
      <p>Ingresa tus datos para poder descrubir todo las constelaciones de Sonora-Resiliente</p>
      <validation-observer ref="form" v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(signUp)">
          <validation-provider
            v-slot="{ errors }"
            name="name"
            rules="required|min:3"
            tag="div"
            vid="name"
          >
            <label
              :class="{ error: errors.length > 0 }"
            >Nombre</label>
            <input
              v-model="name"
              class="form-input"
              name="email"
              placeholder="Ingresa tu nombre"
              type="text"
              :class="{ error: errors.length > 0 }"
              :disabled="uiState === UI_STATES.LOADING"
            >
            <span
              :class="{ error: errors.length > 0 }"
            >{{ errors.join(',') }}</span>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="country"
            rules=""
            tag="div"
            vid="country"
          >
            <label
              :class="{ error: errors.length > 0 }"
            >País</label>
            <select class="form-select" v-model="country" name="country">
              <option>Guatemala</option>
              <option>México</option>
            </select>
            <span
              :class="{ error: errors.length > 0 }"
            >{{ errors.join(',') }}</span>
          </validation-provider>
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
            >{{ errors.join(',') }}</span>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="confirmation"
            rules="required|password:@password"
            tag="div"
            vid="confirmation"
          >
            <label
              :class="{ error: errors.length > 0 }"
            >Repetir contraseña</label>
            <input
              v-model="passwordConfirmation"
              class="form-input"
              placeholder="Vuelve a ingresar la contraseña"
              type="password"
              :class="{ error: errors.length > 0 }"
              :disabled="uiState === UI_STATES.LOADING"
            >
            <span
              :class="{ error: errors.length > 0 }"
            >{{ errors.join(',') }}</span>
          </validation-provider>
          <p>Al hacer clic en Registrarte, aceptas los <a href="#">Términos y Condiciones de Uso</a>.</p>
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
      </validation-observer>
      <div class="Card-actions">
        <p>¿Ya tienes una cuenta?</p>
        <a href="#">Iniciar sesión</a>
      </div>
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
      name: '',
      country: '',
      password: '',
      passwordConfirmation: '',
      uiState: UI_STATES.BLANK,
      UI_STATES
    }
  },
  head () {
    return {
      title: 'Regístrate gratis | Explorador Resiliente'
    }
  },
  methods: {
    async signUp () {
      try {
        this.uiState = UI_STATES.LOADING
        const newuser = await this.$fire.auth.createUserWithEmailAndPassword(
          this.email,
          this.password
        )
        await this.$fire.firestore.collection('profiles').doc(newuser.user.uid).set({
          name: this.name,
          country: this.country
        })
        this.uiState = UI_STATES.IDEAL
        this.$router.push('/')
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          this.$refs.form.setErrors({
            email: ['El correo electrónico ya se encuentra en uso']
          })
          this.uiState = UI_STATES.IDEAL
        } else if (error.code === 'auth/weak-password') {
          this.$refs.form.setErrors({
            password: ['La contraseña debe tener al menos 6 caracteres']
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
