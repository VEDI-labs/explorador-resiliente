<template>
  <div class="flex flex-col items-start w-full">
    <h2>
      Explorar
    </h2>
    <CommunityCard :featured="true" />
    <div class="grid grid-cols-8 gap-8 text-left mt-8 w-full">
      <div class="col-span-4">
        <div class="flex items-center justify-between">
          <h4>Sonidos</h4>
          <a href="#">Ver más</a>
        </div>
        <div>
          <SoundCard />
          <SoundCard />
          <SoundCard />
          <SoundCard />
        </div>
      </div>
      <div class="col-span-4">
        <div class="flex items-center justify-between">
          <h4>Artistas</h4>
          <a href="#">Ver más</a>
        </div>
        <div class="grid grid-cols-4 gap-x-4 gap-y-8">
          <ArtistCard full-name="Renato Cifuentes" class="Artist" />
          <ArtistCard full-name="Fernando Martínez" class="Artist" />
          <ArtistCard full-name="Alejandra González" class="Artist" />
          <ArtistCard full-name="Ester Samayoa" class="Artist" />
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
      url: 'https://images.unsplash.com/photo-1518105570919-e342af1a8275?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80'
    }
  },
  head () {
    return {
      title: 'Explorar | Explorador Resiliente'
    }
  }
}

</script>

<style lang="postcss" scoped>
.Artist {
  @apply col-span-2;
}
</style>
