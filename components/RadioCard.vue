<template>
  <article
    class="radio-station"
    @click.stop="goToPlayer()"
  >
    <div class="figure-container w-1/4">
      <figure>
        <img :src="item.picture" alt="Cover">
      </figure>
    </div>
    <section>
      <h6>{{ item.name }}</h6>
      <div
        v-show="item.status === 'online'"
        class="radio-station-indicator"
      >
        <IconObject height="20" width="20" color="white" />
        <span>En vivo</span>
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
        params: { slug: this.item.id },
        query: { type: this.item.type }
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
  @apply flex items-center justify-center bg-red-900 rounded-full text-white px-2 py-1 uppercase text-xs;
}
</style>
