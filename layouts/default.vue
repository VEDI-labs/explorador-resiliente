<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated'
    })
  },
  mounted () {
    if (['sign-up', 'sign-in'].includes(this.$route.name) && this.isAuthenticated) {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="postcss">
body {
  @apply bg-gray-50 min-h-screen;
  @apply flex justify-center items-center;

  & > div {
    @apply flex-1;
  }
}

p {
  @apply text-base text-gray-700;
  @apply mb-4;
}

.Card {
  @apply mx-auto my-auto;
  @apply bg-white shadow-xl rounded-2xl;
  @apply flex flex-col justify-center;
  @apply h-auto;
  @apply px-8 py-12
}

.Card-title {
  @apply text-3xl font-semibold;
  @apply mb-2;
}

.Card-content {
  @apply flex flex-col;
  @apply bg-white;
}

.InputContainer {
  @apply flex flex-col mb-4;

  & input {
    @apply mb-1;
  }

  & label {
    @apply mb-1;
    @apply font-bold text-gray-700;
  }

  & span {
    @apply text-gray-300;
  }

  &.error input {
    @apply border-error;
  }

  &.error label {
    @apply text-error;
  }

  &.error span {
    @apply text-error;
  }
}

.SubmitButton {
  @apply bg-accent-500;
  @apply text-white;
  @apply p-2;
  @apply rounded-full;
  @apply flex justify-center;
  @apply mt-4;
  @apply shadow-md;
  @apply border-2 border-white;
  @apply w-full;

  & svg {
    @apply mr-2;
    @apply animate-spin;
  }

  &:focus {
    @apply outline-none;
  }

  &:hover {
    @apply bg-accent-300;
  }

  &:focus {
    @apply bg-accent-900;
  }
}
</style>
