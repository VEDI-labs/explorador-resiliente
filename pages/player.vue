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
          <IconObject height="24" width="24" color="#081C1F" /><span>Dispositivo actual</span>
        </div>
      </section>
      <section class="controls">
        <div class="playback-controls">
          <button class="rounded ghost">
            <IconPrevious width="24" height="24" color="#0BA882" />
          </button>
          <button class="rounded play">
            <IconPlay width="32" height="32" color="#ffffff" />
          </button>
          <button class="rounded ghost">
            <IconNext width="24" height="24" color="#0BA882" />
          </button>
        </div>
        <div>
          <IconSpeaker width="32" height="32" color="#0BA882" />
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import IconObject from '~/components/icons/IconObject'
import IconSpeaker from '~/components/icons/IconSpeaker'
import IconPlay from '~/components/icons/IconPlay'
import IconPrevious from '~/components/icons/IconPrevious'
import IconNext from '~/components/icons/IconNext'

export default {
  components: {
    IconObject,
    IconSpeaker,
    IconPlay,
    IconPrevious,
    IconNext
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
    @apply flex items-center;
    @apply mb-12;

    & .play {
      @apply mx-2;
      height: 64px;
      width: 64px;
    }
  }
</style>
