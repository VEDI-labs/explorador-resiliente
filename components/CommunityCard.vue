<template>
  <article
    class="Community"
    :style="{
      backgroundImage: `url(${url})`
    }"
  >
    <div class="Community-container">
      <div class="Community-content">
        <span v-show="featured" class="bg-accent-500 px-4 py-1 text-sm rounded-md text-white">
          Destacada del mes
        </span>
        <h3
          class="mb-0 text-white"
          :class="{
            'text-2xl': !featured
          }"
        >
          VEDI Quetzaltenango
        </h3>
        <div v-show="featured" class="flex items-center justify-center mb-2">
          <img
            src="https://www.countryflags.io/gt/flat/32.png"
            height="32"
            width="32"
          >
          <p class="text-white text-sm mb-0 ml-2">
            Guatemala
          </p>
        </div>
        <div class="flex justify-center items-center mt-2">
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
  </article>
</template>
<script>
export default {
  props: {
    featured: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      url: 'https://images.unsplash.com/photo-1518105570919-e342af1a8275?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80'
    }
  }
}
</script>
<style lang="postcss" scoped>
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
  @apply p-4;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
