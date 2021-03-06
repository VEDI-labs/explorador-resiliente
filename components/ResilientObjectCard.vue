<template>
  <div
    class="sound-card flex flex-col"
  >
    <div
      class="figure-container w-full"
    >
      <figure>
        <img :src="resilientObject.picture" alt="Cover">
      </figure>
    </div>
    <section
      class="flex flex-col flex-1 justify-center mt-2"
    >
      <h6 class="mb-1">
        {{ resilientObject.name }}
      </h6>
    </section>
  </div>
</template>
<script>
export default {
  components: {
  },
  props: {
    resilientObject: {
      type: Object,
      default () {
        return {
          name: '',
          picture: '',
          id: null
        }
      }
    }
  }
}
</script>
<style lang="postcss" scoped>
.sound-card {
  @apply flex mb-4;

  & span {
    @apply ml-1
  }
}
</style>
