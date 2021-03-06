<template>
  <div class="flex flex-col items-start w-full">
    <h1>Comunidades</h1>
    <section v-for="country in countries" :key="country.code" class="flex flex-col items-start mb-8 w-full">
      <h4 class="mb-4">
        {{ country.name }}
      </h4>
      <div class="grid grid-cols-8 w-full gap-x-4 gap-y-6">
        <CommunityCard v-for="community in byCountry(country)" :key="community.id" :community="community" class="col-span-4" />
      </div>
    </section>
  </div>
</template>
<script>
import CommunityCard from '~/components/CommunityCard'
export default {
  components: {
    CommunityCard
  },
  data () {
    return {
      communities: [],
      countries: []
    }
  },
  head () {
    return {
      title: 'Comunidades | Explorador Resiliente'
    }
  },
  async mounted () {
    const { docs } = await this.$fire.firestore.collection('communities').get()
    for (const doc of docs) {
      const data = doc.data()
      this.communities.push({
        id: doc.id,
        name: data.name,
        picture: data.picture,
        featured: false,
        people: data.people,
        sounds: data.sounds,
        country: data.country
      })
      const country = this.countries.find(c => c.code === data.country.code)
      if (country === undefined) {
        this.countries.push(data.country)
      }
    }
  },
  methods: {
    byCountry (country) {
      return this.communities.filter(community => community.country.code === country.code)
    }
  }
}
</script>
