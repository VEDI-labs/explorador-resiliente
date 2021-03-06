<template>
  <div class="flex w-full my-4 justify-between items-start text-left">
    <div class="flex items-center">
      <p class="mx-2 font-bold mb-0">
        {{ index }}
      </p>
      <img class="mx-4" src="https://ui-avatars.com/api/?name=Renato+Fuentes" width="32" height="32">
      <p class="mx-4 font-bold mb-0">
        {{ sound.name }}
      </p>
      <p class="mx-4 text-gray-500 mb-0">
        {{ sound.author }}
      </p>
    </div>
    <div class="flex items-center">
      <IconTime width="20" height="20" color="#081C1F" />
      <p class="ml-2 mr-8 mb-0">
        {{ duration }}
      </p>
      <IconMicrophone width="20" height="20" color="#081C1F" />
      <p class="ml-2 mr-0 mb-0">
        {{ sound.tags.join(',') }}
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
  props: {
    sound: {
      type: Object,
      default () {
        return {
          name: '',
          author: '',
          length: 0,
          tags: []
        }
      }
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    duration () {
      const div1 = this.sound.length / 3600
      const coe1 = this.sound.length % 3600
      const hours = Math.floor(div1)
      const div2 = coe1 / 60
      const coe2 = coe1 % 60
      const mins = Math.floor(div2)
      const seg = Math.floor(coe2)

      return `${hours}:${mins}:${seg}`
    }
  }
}
</script>
<style>
</style>
