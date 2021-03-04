<template>
  <div class="flex flex-col items-start w-full">
    <h1>Artistas</h1>
    <section class="flex flex-col items-start w-full">
      <div class="grid grid-cols-8 w-full gap-x-2 gap-y-8">
        <ArtistCard
          v-for="artist in artists"
          :key="artist.id"
          :full-name="artist.name"
          class="col-span-2"
        />
      </div>
    </section>
  </div>
</template>
<script>
import ArtistCard from '~/components/ArtistCard'
export default {
  components: {
    ArtistCard
  },
  data () {
    return {
      artists: []
    }
  },
  async mounted () {
    const { docs } = await this.$fire.firestore.collection('profiles').where('isArtist', '==', true).get()
    for (const doc of docs) {
      const data = doc.data()
      this.artists.push({
        id: doc.id,
        name: data.name,
        picture: data.picture,
        country: data.country
      })
    }
  }
}
</script>
