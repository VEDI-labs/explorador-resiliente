<template>
  <div
    class="sound-card"
    :class="{
      'flex': column,
      'flex-col': column
    }"
  >
    <div
      class="figure-container w-1/4"
      :class="column ? 'w-full' : 'w-1/4'"
    >
      <figure>
        <img src="~/assets/images/bird-cover.jpg" alt="Cover">
      </figure>
    </div>
    <section
      class="flex flex-col flex-1 justify-center"
      :class="{
        'mt-2': column,
        'mx-4': !column
      }"
    >
      <h6 class="mb-1">
        Colobrí en la mañana
      </h6>
      <a href="#">Marcos Sierra</a>
      <div class="flex mt-4">
        <div class="flex items-center">
          <IconTime height="16" width="16" color="#6B7779" />
          <span>2:32</span>
        </div>
        <div class="flex items-center ml-4">
          <IconMicrophone height="16" width="16" color="#6B7779" />
          <span>Aves</span>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import IconMicrophone from '~/components/icons/IconMicrophone'
import IconTime from '~/components/icons/IconTime'

export default {
  components: {
    IconMicrophone,
    IconTime
  },
  props: {
    column: {
      type: Boolean,
      default: false
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
