<template>
  <div class="stations">
    <section class="current-station">
      <h1>Estaciones</h1>
      <section class="cover">
        <div class="figure-container">
          <figure>
            <img src="~/assets/images/bird-cover.jpg" alt="Cover">
          </figure>
        </div>
        <h4 class="station-name">Nombre estación</h4>
        <div class="current-device">
          <IconObject/>
          <span>Dispositivo actual</span>
        </div>
      </section>
      <section class="controls">
        <div class="playback-controls">
          <button class="rounded ghost"><IconPrevious /></button>
          <button class="rounded play"><IconPlay /></button>
          <button class="rounded ghost"><IconNext /></button>
        </div>
        <div>
          <IconSpeaker />
        </div>
      </section>
    </section>
    <section class="similar-stations">
      <h3>Estaciones similares</h3>
      <section>
        <article class="radio-station">
          <div class="figure-container">
            <figure>
              <img src="~/assets/images/bird-cover.jpg" alt="Cover">
            </figure>
          </div>
          <section>
            <h6>Estación 1</h6>
            <div class="radio-station-indicator"><IconObject /><span>En vivo</span></div>
          </section>
        </article>
        <button>Ver más estaciones</button>
      </section>
    </section>
  </div>
</template>

<script>
import IconObject from '~/assets/svg/icon-object.svg'
import IconPlay from '~/assets/svg/icon-play.svg'
import IconNext from '~/assets/svg/icon-next.svg'
import IconPrevious from '~/assets/svg/icon-previous.svg'
import IconSpeaker from '~/assets/svg/icon-speaker.svg'

export default {
  components: {
    IconObject,
    IconPlay,
    IconNext,
    IconPrevious,
    IconSpeaker
  }
}
</script>

<style lang="postcss" scoped>
  .stations {
    @apply flex bg-white;
  }
  .current-station {
    @apply flex flex-col w-2/3;
  }
  .cover {
    @apply flex flex-col self-center items-center w-full my-4;
  }
  .station-name {
    @apply my-4;
  }
  .controls {
    @apply self-center my-4;
  }
  .similar-stations {
    @apply flex flex-col;
    & button {
      @apply self-center;
    }
  }
  .current-device {
    @apply flex;
    & span {
      @apply ml-1;
    }
  }
  .playback-controls {
    @apply flex;
    & .play {
      @apply mx-2;
    }
  }

  .figure-container {
    @apply w-1/4;
    & img {
      @apply bg-gray-500 w-full h-full;
      object-fit: cover;
      position: absolute;
    }
    & figure {
      @apply border-4 border-white rounded-xl shadow-lg;
      position: relative;
      padding-bottom: 100%;
      overflow: hidden;
    }
  }
  .radio-station {
    @apply flex mb-4;

    & .radio-station-indicator {
      @apply flex justify-center bg-red-900 rounded-full text-white px-2 py-1 uppercase;
    }
    & path {
      fill: white;
    }
    & span {
      @apply ml-1
    }
    & section {
      @apply mx-4;
    }
  }
</style>
