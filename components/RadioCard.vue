<template>
  <article class="radio-station">
    <div class="figure-container">
      <figure>
        <img src="~/assets/images/bird-cover.jpg" alt="Cover">
      </figure>
    </div>
    <section>
      <h6>Estación 1</h6>
      <div class="radio-station-indicator">
        <IconObject />
        <span>En vivo</span>
      </div>
    </section>
  </article>
</template>
<script>
import IconObject from '~/assets/svg/icon-object.svg'

export default {
  components: {
    IconObject
  }
}
</script>
<style lang="postcss" scoped>
.radio-station {
  @apply flex mb-4;

  & .radio-station-indicator {
    @apply flex justify-center bg-red-900 rounded-full text-white px-2 py-1 uppercase;
  }
  & path {
    fill: white;
  }
  & span {
    @apply ml-1
  }
  & section {
    @apply mx-4;
  }
}
</style>
