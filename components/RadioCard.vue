<template>
  <article
    class="radio-station"
    :style="{
      opacity: item.status === 'offline' ? 0.5 : 1
    }"
    @click.stop="goToPlayer()"
  >
    <div class="figure-container w-1/4">
      <figure>
        <img :src="item.picture" alt="Cover">
      </figure>
    </div>
    <section class="flex flex-1 flex-col">
      <h6>{{ item.name }}</h6>
      <div
        v-if="item.status === 'online'"
        class="radio-station-indicator"
      >
        <IconObject height="20" width="20" color="#EE4E3B" />
        <span class="text-red-500">En vivo</span>
      </div>
      <div
        v-else-if="item.status === 'offline'"
        class="radio-station-indicator"
      >
        <IconObject height="20" width="20" color="#6B7779" />
        <span class="text-gray-500">Offline</span>
      </div>
    </section>
  </article>
</template>
<script>
import IconObject from '~/components/icons/IconObject'

export default {
  components: {
    IconObject
  },
  props: {
    item: {
      type: Object,
      default () {
        return {
          name: 'Estación',
          status: 'offline',
          picture: '',
          type: 'resilient-object',
          id: null
        }
      }
    }
  },
  methods: {
    goToPlayer () {
      this.$router.push({
        name: 'player-slug',
        params: { slug: this.item.id }
      })
    }
  }
}
</script>
<style lang="postcss" scoped>
.radio-station {
  @apply flex items-center mb-4;

  & path, & rect {
    fill: white;
  }
  & span {
    @apply ml-1
  }
  & section {
    @apply mx-4;
  }

  &:hover {
    cursor: pointer;
  }
}

.radio-station-indicator {
  @apply flex;
  @apply items-center;
  @apply text-xs
}
</style>
