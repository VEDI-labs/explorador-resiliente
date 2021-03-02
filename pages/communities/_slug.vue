<template>
  <div class="flex flex-col items-start w-full">
    <h1>Comunidades</h1>
    <CommunityCard />
    <div class="text-left mt-8 w-full">
      <div class="flex items-center justify-between">
        <h4>Artistas</h4>
        <a href="#">Ver más</a>
      </div>
      <div class="grid grid-cols-8 gap-8 w-full">
        <ArtistCard full-name="Renato Cifuentes" class="col-span-2" />
        <ArtistCard full-name="Alejandra González" class="col-span-2" />
        <ArtistCard full-name="Fernando Martínez" class="col-span-2" />
        <ArtistCard full-name="Ester Samayoa" class="col-span-2" />
      </div>
    </div>
    <div class="text-left mt-8 w-full">
      <div class="flex items-center justify-between">
        <h4>Sonidos</h4>
        <a href="#">Ver más</a>
      </div>
      <div class="grid grid-cols-8 gap-8 w-full">
        <SoundCard class="col-span-2" :column="true" />
        <SoundCard class="col-span-2" :column="true" />
        <SoundCard class="col-span-2" :column="true" />
        <SoundCard class="col-span-2" :column="true" />
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
  }
}
</script>
