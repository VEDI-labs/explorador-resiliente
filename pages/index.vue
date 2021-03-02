<template>
  <div class="flex flex-col items-start w-full">
    <h2>
      Explorar
    </h2>
    <div
      class="Community"
      :style="{
        backgroundImage: `url(${url})`
      }"
    >
      <div class="Community-container">
        <div class="Community-content">
          <span class="bg-accent-500 px-4 py-1 text-sm rounded-md text-white">Destacada del mes</span>
          <h3 class="text-white">
            VEDI Quetzaltenango
          </h3>
          <div class="flex justify-center items-center">
            <div class="flex">
              <img class="rounded-full border-2 border-white shadow-md" src="https://ui-avatars.com/api/?name=User" width="32" height="32" alt="">
              <img class="rounded-full border-2 border-white shadow-md -ml-4" src="https://ui-avatars.com/api/?name=User" width="32" height="32" alt="">
              <img class="rounded-full border-2 border-white shadow-md -ml-4" src="https://ui-avatars.com/api/?name=User" width="32" height="32" alt="">
              <img class="rounded-full border-2 border-white shadow-md -ml-4" src="https://ui-avatars.com/api/?name=User" width="32" height="32" alt="">
              <img class="rounded-full border-2 border-white shadow-md -ml-4" src="https://ui-avatars.com/api/?name=User" width="32" height="32" alt="">
            </div>
            <p class="ml-2 mb-0 text-white">
              +12 personas
            </p>
          </div>
        </div>
      </div>
    </div>
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
import SoundCard from '~/components/SoundCard'
export default {
  components: {
    ArtistCard,
    SoundCard
  },
  data () {
    return {
      url: 'https://images.unsplash.com/photo-1518105570919-e342af1a8275?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80'
    }
  }
}

</script>

<style lang="postcss" scoped>
.Artist {
  @apply col-span-2;
}
.Community {
  @apply bg-gray-100;
  @apply bg-center;
  @apply bg-no-repeat;
  @apply flex-col;
  @apply flex;
  @apply items-start;
  @apply justify-end;
  @apply rounded-xl;
  @apply w-full;
  @apply shadow-xl;
  @apply overflow-hidden;
}

.Community-container {
  background: rgb(8,28,31);
  background: linear-gradient(180deg, rgba(8,28,31,0) 0%, rgba(8,28,31,0.2) 40%, rgba(8,28,31,0.88) 100%);
  height: 0;
  padding-bottom: 33.33%;
  position: relative;
  width: 100%;
}

.Community-content {
  @apply flex-col;
  @apply flex;
  @apply items-start;
  @apply justify-end;
  @apply px-8;
  @apply py-4;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
