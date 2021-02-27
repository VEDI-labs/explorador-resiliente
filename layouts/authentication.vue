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
<style lang="postcss" scoped>
body {
  @apply justify-center;
  @apply items-center;

  & > div {
    @apply flex-1;
  }
}
</style>
