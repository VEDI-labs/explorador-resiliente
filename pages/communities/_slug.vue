<template>
  <div class="flex flex-col items-start w-full">
    <h1>Comunidades</h1>
    <CommunityCard />
    <div class="text-left mt-8 w-full">
      <div class="flex items-center justify-between">
        <h4>Artistas</h4>
      </div>
      <div class="grid grid-cols-8 gap-8 w-full">
        <ArtistCard v-for="artist in people" :key="artist.id" :full-name="artist.name" class="col-span-2" />
      </div>
    </div>
    <div class="text-left mt-8 w-full">
      <div class="flex items-center justify-between">
        <h4>Sonidos</h4>
      </div>
      <div class="grid grid-cols-8 gap-8 w-full">
        <SoundCard v-for="sound in sounds" :key="sound.id" class="col-span-2" :column="true" />
      </div>
    </div>
  </div>
</template>
<script>
import ArtistCard from '~/components/ArtistCard'
import CommunityCard from '~/components/CommunityCard'

export default {
  components: {
    ArtistCard,
    CommunityCard
  },
  data () {
    return {
      community: {
        name: '',
        picture: '',
        featured: false,
        people: [],
        sounds: [],
        country: {
          code: '',
          name: ''
        }
      },
      people: [],
      sounds: []
    }
  },
  head () {
    return {
      title: `${this.community.name} | Explorador Resiliente`
    }
  },
  async mounted () {
    const doc = await this.$fire.firestore.collection('communities').doc(this.$route.params.slug).get()
    await this.loadPeople()
    await this.loadSounds()
    if (doc.exists) {
      const data = doc.data()
      const people = this.people.filter(person => data.people.includes(person.id))
      const sounds = this.sounds.filter(sound => data.sounds.includes(sound.id))
      this.community = {
        id: doc.id,
        name: data.name,
        picture: data.picture,
        featured: data.featured,
        people,
        sounds,
        country: data.country
      }
    }
  },
  methods: {
    async loadPeople () {
      const { docs } = await this.$fire.firestore.collection('profiles').get()
      for (const doc of docs) {
        const data = doc.data()
        this.people.push({
          bio: data.bio,
          communities: data.communities,
          country: data.country,
          isArtist: data.isArtist,
          name: data.name,
          picture: data.picture,
          resilientObjects: data.resilientObjects,
          id: doc.id
        })
      }
    },
    async loadSounds () {
      const { docs } = await this.$fire.firestore.collection('sounds').get()
      for (const doc of docs) {
        const data = doc.data()
        const author = this.people.find(person => person.id === data.author)
        this.sounds.push({
          author,
          file: data.file,
          length: data.length,
          name: data.name,
          picture: data.picture,
          tags: data.tags,
          id: doc.id
        })
      }
    }
  }
}
</script>
