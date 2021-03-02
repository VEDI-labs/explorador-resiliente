<template>
  <article class="radio-station">
    <div class="figure-container w-1/4">
      <figure>
        <img src="~/assets/images/bird-cover.jpg" alt="Cover">
      </figure>
    </div>
    <section>
      <h6>Estación 1</h6>
      <div class="radio-station-indicator">
        <IconObject height="20" width="20" color="white" />
        <span>En vivo</span>
      </div>
    </section>
  </article>
</template>
<script>
import IconObject from '~/components/icons/IconObject'

export default {
  components: {
    IconObject
  }
}
</script>
<style lang="postcss" scoped>
.radio-station {
  @apply flex mb-4;

  & path, & rect {
    fill: white;
  }
  & span {
    @apply ml-1
  }
  & section {
    @apply mx-4;
  }
}

.radio-station-indicator {
  @apply flex items-center justify-center bg-red-900 rounded-full text-white px-2 py-1 uppercase text-xs;
}
</style>
