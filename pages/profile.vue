<template>
  <div class="flex items-start flex-col w-full">
    <h2>Mi perfil</h2>
    <div v-show="user && user.uid && user.profile" class="grid grid-cols-8 gap-8">
      <div class="col-span-2">
        <div>
          <img class="rounded-full shadow-lg mx-auto my-2 flex-left" :src="user.profile.picture" width="150" height="150">
        </div>
      </div>
      <div class="col-span-6">
        <h4 class="text-left">
          {{ user.profile.name }}
        </h4>
        <div v-show="user.profile.country" class="flex items-center">
          <img
            :src="`https://www.countryflags.io/${user.profile.country.code}/flat/32.png`"
            height="32"
            width="32"
          >
          <p class="ml-3 mb-0">
            {{ user.profile.country.name }}
          </p>
        </div>
        <p class="text-left mt-4">
          {{ user.profile.bio }}
        </p>
      </div>
    </div>
    <div class="mt-8">
      <button
        class="menu_button"
        :class="{
          'active': tab === 'sounds'
        }"
        @click.stop="tab = 'sounds'"
      >
        Sonidos
      </button>
      <button
        class="menu_button"
        :class="{
          'active': tab === 'objects'
        }"
        @click.stop="tab = 'objects'"
      >
        Objetos
      </button>
      <button
        class="menu_button"
        :class="{
          'active': tab === 'communities'
        }"
        @click.stop="tab = 'communities'"
      >
        Comunidades
      </button>
      <button
        class="menu_button"
        :class="{
          'active': tab === 'photos'
        }"
        @click.stop="tab = 'photos'"
      >
        Fotografías
      </button>
    </div>
    <div v-if="tab === 'sounds'" class="flex flex-col mt-4 w-full">
      <song
        v-for="(sound, index) in sounds"
        :key="sound.id"
        :sound="sound"
        :index="index"
      />
    </div>
    <div
      v-else-if="tab === 'objects'"
      class="grid grid-cols-8 w-full gap-x-4 gap-y-6 mt-4"
    >
      <ResilientObjectCard
        v-for="resilientObject in resilientObjects"
        :key="resilientObject.id"
        class="col-span-2"
        :resilient-object="resilientObject"
      />
    </div>
    <div
      v-else-if="tab === 'communities'"
      class="grid grid-cols-8 w-full gap-x-4 gap-y-6 mt-4"
    >
      <CommunityCard
        v-for="community in communities"
        :key="community.id"
        :community="community"
        class="col-span-8"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'

import Song from '~/components/Song'
import CommunityCard from '~/components/CommunityCard'
import ResilientObjectCard from '~/components/ResilientObjectCard'

export default {
  components: {
    Song,
    CommunityCard,
    ResilientObjectCard
  },
  data () {
    return {
      artist: {
        name: '',
        picture: '',
        bio: '',
        country: {
          code: '',
          name: ''
        },
        communities: []
      },
      sounds: [],
      communities: [],
      resilientObjects: [],
      tab: 'sounds'
    }
  },
  head () {
    return {
      title: `${this.artist.name} | Explorador Resiliente`
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated'
    }),
    ...mapState({
      user: 'user'
    })
  },
  methods: {
    async loadSounds () {
      const sounds = []
      const { docs } = await this.$fire.firestore.collection('sounds').where('author', '==', this.artist.id).get()
      for (const doc of docs) {
        const data = doc.data()
        sounds.push({
          file: data.file,
          author: this.artist.name,
          length: Math.round(data.length / 1000),
          name: data.name,
          picture: data.picture,
          tags: data.tags,
          id: doc.id
        })
      }
      return sounds
    },
    async loadCommunities (communityList) {
      const communities = []
      for (const community of communityList) {
        const doc = await this.$fire.firestore.collection('communities').doc(community).get()
        if (doc.exists) {
          const data = doc.data()
          communities.push({
            id: doc.id,
            name: data.name,
            picture: data.picture,
            featured: data.featured,
            people: [],
            sounds: [],
            country: data.country
          })
        }
      }
      return communities
    },
    async loadResilientObjects (objectList) {
      const resilientObjects = []
      for (const resilientObject of objectList) {
        const doc = await this.$fire.firestore.collection('resilient-objects').doc(resilientObject).get()
        if (doc.exists) {
          const data = doc.data()
          resilientObjects.push({
            id: doc.id,
            name: data.name,
            picture: data.picture
          })
        }
      }
      return resilientObjects
    }
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
