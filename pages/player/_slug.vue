<template>
  <div class="stations">
    <h1>Música</h1>
    <section class="current-station">
      <section class="cover">
        <div class="figure-container w-1/4">
          <figure>
            <img :src="picture" alt="Cover">
          </figure>
        </div>
        <h4 class="station-name">
          {{ name }}
        </h4>
        <div v-if="status === 'online'" class="current-device bg-red-900">
          <IconObject height="24" width="24" color="#ffffff" /><span>En vivo</span>
        </div>
        <div v-else-if="status === 'offline'" class="current-device bg-gray-500">
          <IconObject height="24" width="24" color="#ffffff" /><span>Offline</span>
        </div>
      </section>
      <section class="controls">
        <div class="playback-controls">
          <button
            class="rounded play"
            :disabled="status === 'offline'"
            @click="togglePlayer"
          >
            <IconPlay v-if="isPaused" width="32" height="32" color="#ffffff" />
            <IconPause v-else width="32" height="32" color="#ffffff" />
          </button>
        </div>
        <div
          class="volume-control"
          :style="{
            opacity: status === 'offline' ? 0.5 : 1
          }"
        >
          <IconSpeaker width="32" height="32" color="#0BA882" />
          <div class="ml-8 flex-1">
            <vue-slider
              v-model="volume"
              :disabled="status === 'offline'"
              :dot-style="{
                borderColor: '#0BA882'
              }"
              :process-style="{
                backgroundColor: '#0BA882'
              }"
              :rail-style="{
                backgroundColor: '#E1E5E6'
              }"
            />
          </div>
        </div>
        <audio ref="audio" :volume="volume / 100" loop />
      </section>
    </section>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

import IconObject from '~/components/icons/IconObject'
import IconSpeaker from '~/components/icons/IconSpeaker'
import IconPlay from '~/components/icons/IconPlay'
import IconPause from '~/components/icons/IconPause'

export default {
  components: {
    IconObject,
    IconSpeaker,
    IconPlay,
    IconPause,
    VueSlider
  },
  data () {
    return {
      name: '',
      picture: '',
      id: null,
      status: 'offline',
      isPaused: true,
      volume: 80
    }
  },
  watch: {
    volume () {
      this.$refs.audio.volume = this.volume / 100
    }
  },
  async mounted () {
    const record = await this.$fire.firestore.collection('stations').doc(this.$route.params.slug).get()
    if (record.exists) {
      const data = record.data()
      this.id = record.id
      this.name = data.name
      this.picture = data.picture
      this.status = data.status
    } else {
      this.$router.push('/404')
    }
  },
  methods: {
    togglePlayer () {
      this.$refs.audio.volume = this.volume / 100
      if (this.isPaused) {
        this.$refs.audio.play()
        this.isPaused = false
      } else {
        this.$refs.audio.pause()
        this.isPaused = true
      }
    }
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
    @apply my-2;
    @apply self-center;
    @apply w-2/5;
  }
  .similar-stations {
    @apply flex flex-col;
    & button {
      @apply self-center;
    }
  }
  .current-device {
    @apply flex;
    @apply px-4 py-2;
    @apply rounded-full;

    & span {
      @apply ml-1;
      @apply text-white;
    }
  }
  .playback-controls {
    @apply flex;
    @apply items-center;
    @apply justify-center;
    @apply mb-12;

    & .play {
      @apply mx-2;
      height: 64px;
      width: 64px;
    }
  }
  .volume-control {
    @apply flex;
    @apply items-center;
    @apply w-full;
  }
</style>
