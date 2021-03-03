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
        <div v-show="status === 'online'" class="current-device">
          <IconObject height="24" width="24" color="#ffffff" /><span>En vivo</span>
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
  },
  data () {
    return {
      name: '',
      picture: '',
      id: null,
      type: '',
      status: 'offline'
    }
  },
  async mounted () {
    const collection = this.$route.query.type === 'resilient-object' ? 'resilient-objects' : 'stations'
    const record = await this.$fire.firestore.collection(collection).doc(this.$route.params.slug).get()
    if (record.exists) {
      const data = record.data()
      this.id = record.id
      this.name = data.name
      this.picture = data.picture
      this.status = data.status
      this.type = this.$route.query.type
    } else {
      this.$router.push('/404')
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
    @apply self-center my-2;
  }
  .similar-stations {
    @apply flex flex-col;
    & button {
      @apply self-center;
    }
  }
  .current-device {
    @apply flex;
    @apply bg-red-900;
    @apply px-4 py-2;
    @apply rounded-full;

    & span {
      @apply ml-1;
      @apply text-white;
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
