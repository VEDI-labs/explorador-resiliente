<template>
  <div class="flex flex-1 w-full my-4 justify-between">
    <div class="flex items-center justify-center content-center">
      <p class="mx-5 font-bold pb-0">1</p>
      <img class= "mx-5" src="https://ui-avatars.com/api/?name=Renato+Fuentes" width="25" height="25"></img>
      <p class="mx-5 font-bold pb-0">Colibrí en la mañana</p>
      <p class="mx-5 text-gray-500 pb-0">{{name}}</p>
    </div>
    <div class="flex">
      <IconTime/>
      <p class="mx-5 pb-0">00:00</p>
      <IconMicrophone/>
      <p class="mx-5 pb-0">Aves</p>
    </div>
  </div>
</template>
<script>
import IconMicrophone from '~/assets/svg/icon-microphone.svg'
import IconTime from '~/assets/svg/icon-time.svg'
export default {
  components: {
    IconMicrophone,
    IconTime
  },
  props: [
    'name'
  ]
}
</script>
<style>
</style>
