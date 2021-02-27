<template>
  <div class="stations">
    <h1>Estaciones</h1>
    <section class="current-station">
      <section class="cover">
        <div class="figure-container">
          <figure>
            <img src="~/assets/images/bird-cover.jpg" alt="Cover">
          </figure>
        </div>
        <h4 class="station-name">
          Nombre estación
        </h4>
        <div class="current-device">
          <IconObject />
          <span>Dispositivo actual</span>
        </div>
      </section>
      <section class="controls">
        <div class="playback-controls">
          <button class="rounded ghost">
            <IconPrevious />
          </button>
          <button class="rounded play">
            <IconPlay />
          </button>
          <button class="rounded ghost">
            <IconNext />
          </button>
        </div>
        <div>
          <IconSpeaker />
        </div>
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
    @apply flex flex-col;
    @apply h-full;
    @apply w-full;

    & h1 {
      @apply self-start;
    }
  }
  .current-station {
    @apply flex flex-col flex-1 justify-center;
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
    @apply mb-12;
    & .play {
      @apply mx-2;
    }
  }
</style>
