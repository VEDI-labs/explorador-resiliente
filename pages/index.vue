<template>
  <div class="flex flex-col items-start w-full">
    <h2>
      Explorar
    </h2>
    <CommunityCard :community="community" :profiles="profiles" />
    <div class="grid grid-cols-8 gap-8 text-left mt-8 w-full">
      <div class="col-span-4">
        <div class="flex items-center justify-between">
          <h4>Sonidos</h4>
          <a href="#">Ver más</a>
        </div>
        <div
          v-for="sound in sounds"
          :key="sound.id"
        >
          <SoundCard :sounds="sound" />
        </div>
      </div>
      <div class="col-span-4">
        <div class="flex items-center justify-between">
          <h4>Artistas</h4>
          <a href="#">Ver más</a>
        </div>
        <div class="grid grid-cols-4 gap-x-4 gap-y-8">
          <ArtistCard :profile="profiles[0]" class="Artist" />
          <ArtistCard :profile="profiles[1]" class="Artist" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ArtistCard from '~/components/ArtistCard'
import CommunityCard from '~/components/CommunityCard'
import SoundCard from '~/components/SoundCard'

export default {
  components: {
    ArtistCard,
    CommunityCard,
    SoundCard
  },
  data () {
    return {
      community: {
        featured: false,
        name: '',
        people: [],
        sounds: [],
        picture: '',
        country: {
          code: '',
          name: ''
        }
      },
      profiles: [],
      sounds: [],
      url: 'https://images.unsplash.com/photo-1518105570919-e342af1a8275?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80'
    }
  },
  head () {
    return {
      title: 'Explorar | Explorador Resiliente'
    }
  },
  async mounted () {
    await this.load_profiles()
    await this.load_communities()
    await this.load_sounds()
  },
  methods: {
    async load_communities () {
      const RESULT = await this.$fire.firestore.collection('communities').where('featured', '==', true).get()
      const DOCS = RESULT.docs
      const RECORD = DOCS[0].data()
      const PEOPLE = this.profiles.filter((profile) => { return RECORD.people.includes(profile.id) })
      this.community.featured = RECORD.featured
      this.community.name = RECORD.name
      this.community.people = PEOPLE
      this.community.sounds = RECORD.sounds
      this.community.picture = RECORD.picture
      this.community.country = RECORD.country
    },
    async load_profiles () {
      const RESULT = await this.$fire.firestore.collection('profiles').get()
      const DOCS = RESULT.docs
      for (const DOC of DOCS) {
        const RECORD = {
          bio: DOC.data().bio,
          communities: DOC.data().communities,
          country: DOC.data().country,
          isArtist: DOC.data().isArtist,
          name: DOC.data().name,
          picture: DOC.data().picture,
          resilentObjects: DOC.data().resilentObjects,
          id: DOC.id
        }
        this.profiles.push(RECORD)
      }
    },
    async load_sounds () {
      const RESULT = await this.$fire.firestore.collection('sounds').get()
      const DOCS = RESULT.docs
      for (const DOC of DOCS) {
        const ARTIST = this.profiles.find((profile) => { return profile.id === DOC.data().author })
        const RECORD = {
          author: DOC.data().author,
          file: DOC.data().file,
          length: DOC.data().length,
          name: DOC.data().name,
          picture: DOC.data().picture,
          tags: DOC.data().tags,
          id: DOC.id,
          authorName: ARTIST.name
        }
        this.sounds.push(RECORD)
      }
    }
  }
}

</script>

<style lang="postcss" scoped>
.Artist {
  @apply col-span-2;
}
</style>
