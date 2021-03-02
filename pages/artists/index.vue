<template>
  <div class="flex flex-col items-start w-full">
    <h1>Artistas</h1>
    <section class="flex flex-col items-start w-full">
      <h4 class="mb-8">
        VEDI Guatemala
      </h4>
      <div class="grid grid-cols-8 w-full gap-x-2 gap-y-8">
        <ArtistCard full-name="Renato Cifuentes" class="col-span-2" />
        <ArtistCard full-name="Alejandra González" class="col-span-2" />
        <ArtistCard full-name="Fernando Martínez" class="col-span-2" />
        <ArtistCard full-name="Ester Samayoa" class="col-span-2" />
        <ArtistCard full-name="Renato Cifuentes" class="col-span-2" />
        <ArtistCard full-name="Alejandra González" class="col-span-2" />
        <ArtistCard full-name="Fernando Martínez" class="col-span-2" />
        <ArtistCard full-name="Ester Samayoa" class="col-span-2" />
      </div>
      <button class="self-center mt-8">
        Ver más artistas
      </button>
    </section>
    <section class="mt-16 flex flex-col items-start w-full">
      <h4 class="mb-8">
        VEDI México
      </h4>
      <div class="grid grid-cols-8 w-full gap-x-2 gap-y-8">
        <ArtistCard full-name="Renato Cifuentes" class="col-span-2" />
        <ArtistCard full-name="Alejandra González" class="col-span-2" />
        <ArtistCard full-name="Fernando Martínez" class="col-span-2" />
        <ArtistCard full-name="Ester Samayoa" class="col-span-2" />
        <ArtistCard full-name="Renato Cifuentes" class="col-span-2" />
        <ArtistCard full-name="Alejandra González" class="col-span-2" />
        <ArtistCard full-name="Fernando Martínez" class="col-span-2" />
        <ArtistCard full-name="Ester Samayoa" class="col-span-2" />
      </div>
      <button class="self-center mt-8">
        Ver más artistas
      </button>
    </section>
  </div>
</template>
<script>
import ArtistCard from '~/components/ArtistCard'
export default {
  components: {
    ArtistCard
  }
}
</script>
