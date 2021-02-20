<template>
  <div
    class="
      Card
      w-5\6 sm:w-5/6 md:w-2/3 lg:w-3/5 xl:w-1/4 2xl:w-1/4
    "
  >
    <h1>
      Registrar usuario
    </h1>
    <form>
      <label for="email">Correo electrónico:</label>
      <input
        id="email"
        v-model="email"
        name="email"
        type="email"
        :disabled="uiState === UI_STATES.LOADING"
      >
      <label>Contraseña:</label>
      <input
        id="password"
        v-model="password"
        name="password"
        type="password"
        :disabled="uiState === UI_STATES.LOADING"
      >
      <button
        type="button"
        :disabled="uiState === UI_STATES.LOADING"
        @click.prevent="signUp"
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
  </div>
</template>
<script>
const UI_STATES = {
  BLANK: 'BLANK_STATE',
  ERROR: 'ERROR_STATE',
  LOADING: 'LOADING_STATE',
  IDEAL: 'IDEAL_STATE'
}

export default {
  data () {
    return {
      email: '',
      password: '',
      uiState: UI_STATES.BLANK,
      UI_STATES
    }
  },
  methods: {
    async signUp () {
      try {
        this.uiState = UI_STATES.LOADING
        await this.$fire.auth.createUserWithEmailAndPassword(
          this.email,
          this.password
        )
        this.uiState = UI_STATES.IDEAL
      } catch (e) {
        console.error('Error')
        console.error(e)
        this.uiState = UI_STATES.ERROR
      }
    }
  }
}
</script>
<style lang="postcss" scoped>
button {
  @apply bg-green-500;
  @apply text-white;
  @apply p-2;
  @apply rounded-md;
  @apply flex justify-center;

  & svg {
    @apply mr-2;
    @apply animate-spin;
  }

  &:focus {
    @apply outline-none;
  }

  &:hover, &:focus {
    @apply bg-green-700;
  }
}

h1 {
  @apply text-3xl font-bold font-bold;
  @apply mb-4;
}

input {
  @apply border-2 border-green-200 mb-4 rounded-md w-full;
  @apply p-2;

  &:focus {
    @apply bg-green-100;
    @apply border-green-500;
    @apply outline-none;
  }
}

form {
  @apply flex flex-col;
  @apply bg-white
}

label {
  @apply mb-1;
}

.Card {
  @apply mx-auto my-auto;
  @apply bg-white shadow-xl rounded-2xl;
  @apply flex flex-col justify-center;
  @apply h-auto;
  @apply px-8 py-12
}
</style>
