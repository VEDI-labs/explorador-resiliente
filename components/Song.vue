<template>
  <div class="flex flex-1 w-full my-4 justify-between">
    <div class="flex items-center justify-center content-center">
      <p class="mx-5 font-bold pb-0">
        1
      </p>
      <img class="mx-5" src="https://ui-avatars.com/api/?name=Renato+Fuentes" width="25" height="25">
      <p class="mx-5 font-bold pb-0">
        Colibrí en la mañana
      </p>
      <p class="mx-5 text-gray-500 pb-0">
        {{ name }}
      </p>
    </div>
    <div class="flex">
      <IconTime width="20" height="20" color="#081C1F" />
      <p class="mx-5 pb-0">
        00:00
      </p>
      <IconMicrophone width="20" height="20" color="#081C1F" />
      <p class="mx-5 pb-0">
        Aves
      </p>
    </div>
  </div>
</template>
<script>
import IconTime from '~/components/icons/IconTime'
import IconMicrophone from '~/components/icons/IconMicrophone'

export default {
  components: {
    IconTime,
    IconMicrophone
  },
  props: [
    'name'
  ]
}
</script>
<style>
</style>
