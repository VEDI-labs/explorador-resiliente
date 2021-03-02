<template>
  <div class="flex items-start flex-col w-full">
    <h2>Artistas</h2>
    <div class="grid grid-cols-8 gap-8">
      <div class="col-span-2">
        <div>
          <img class="rounded-full shadow-lg mx-auto my-2 flex-left" :src="avatar_url" width="150" height="150">
        </div>
      </div>
      <div class="col-span-6">
        <h4 class="text-left">
          {{ full_name }}
        </h4>
        <div class="flex">
          <p class="ml-3">
            Guatemala
          </p>
        </div>
        <p>Parte de una red de co-creación artística para la juventud intercultural</p>
      </div>
    </div>
    <div class="mt-12">
      <button class="menu_button active">
        Sonidos
      </button>
      <button class="menu_button">
        Objetos
      </button>
      <button class="menu_button">
        Comunidades
      </button>
      <button class="menu_button">
        Fotografías
      </button>
    </div>
    <div class="flex flex-col flex-1 w-full">
      <song :name="full_name" />
      <song :name="full_name" />
      <song :name="full_name" />
      <song :name="full_name" />
      <song :name="full_name" />
    </div>
  </div>
</template>
<script>
import Song from '~/components/Song.vue'
export default {
  components: {
    Song
  },
  data () {
    return {
      name: '',
      last_name: '',
      country: '',
      avatar_url: ''
    }
  },
  computed: {
    full_name () {
      return `${this.name} ${this.last_name}`
    }
  },
  mounted () {
    this.name = 'Renato'
    this.last_name = 'Fuentes'
    this.avatar_url = `https://ui-avatars.com/api/?name=${this.name}+${this.last_name}`
  },
  methods: {
  }
}
</script>
<style lang="postcss" scoped>
  .menu_button{
    @apply bg-transparent shadow-none text-gray-900 capitalize rounded-none border-0;
    &.active{
      @apply text-primary-300 border-0 border-b-2 border-primary-300;
    }
    &:hover{
      @apply text-primary-300;
    }
  }
</style>
