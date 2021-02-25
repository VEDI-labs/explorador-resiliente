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
a {
  @apply text-base;
  @apply text-primary-300;

  &:hover {
    @apply underline;
  }
}

body {
  font-family: 'yaahowu';
  @apply bg-gray-50;
  @apply min-h-screen;
  @apply flex;
  @apply justify-center;
  @apply items-center;

  & > div {
    @apply flex-1;
  }
}

button {
  @apply bg-accent-500;
  @apply border-2;
  @apply border-gray-50;
  @apply px-6;
  @apply py-2;
  @apply rounded-full;
  @apply shadow-lg;
  @apply text-gray-50;
  @apply uppercase;

  &.full {
    @apply w-full;
  }

  &:disabled {
    @apply cursor-not-allowed;
    @apply opacity-50;
  }

  &:hover {
    @apply bg-accent-300;
  }

  &:active, &:focus {
    @apply bg-accent-900;
    @apply outline-none;
    @apply shadow-sm;
  }
}

form {
  @apply flex-col;
  @apply flex;
  @apply w-full;

  & button[type="submit"] {
    @apply self-end;
  }

  & span {
    @apply text-gray-700;
    @apply w-full;

    &.error {
      @apply text-error;
    }
  }

  & > div {
    @apply flex-col;
    @apply flex;
    @apply mb-4;
  }
}

h1 {
  @apply text-6xl;
}

h2 {
  @apply text-5xl;
}

h3 {
  @apply text-4xl;
}

h4 {
  @apply text-3xl;
}

h5 {
  @apply text-2xl;
}

h6 {
  @apply text-xl;
}

input {
  @apply mb-2;

  &.error {
    @apply border-error;
    @apply text-error;
  }
}

label {
  @apply font-bold;
  @apply mb-2;
  @apply text-base;
  @apply text-gray-700;

  &.error {
    @apply text-error;
  }
}

p {
  @apply text-base;
  @apply text-gray-700;
  @apply mb-4;
}

.Card {
  @apply mx-auto my-auto;
  @apply bg-white shadow-xl rounded-2xl;
  @apply flex flex-col justify-center;
  @apply h-auto;
  @apply px-8 py-12
}

.Card-actions {
  @apply border-gray-100;
  @apply border-t-2;
  @apply mt-4;
  @apply pt-4;
  @apply text-center;
}

h1, h2, h3, h4, h5, h6 {
  @apply text-gray-900;
  @apply font-bold;
  @apply mb-2;
}
</style>
