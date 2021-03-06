<template>
  <article class="flex flex-col items-center">
    <img
      class="rounded-full border-2 border-white shadow-md mb-4"
      :src="`https://ui-avatars.com/api/?name=${profile.name}`"
      width="50%"
      height="50%"
      alt="user"
    >
    <h6 class="mb-2">
      {{ profile.name }}
    </h6>
    <div class="flex items-center justify-center">
      <img
        :src="`https://www.countryflags.io/${profile.country.code}/flat/32.png`"
        height="32"
        width="32"
      >
      <p class="text-sm mb-0 ml-2">
        {{ profile.country.name}}
      </p>
    </div>
  </article>
</template>
<script>
export default {
  props: {
    profile: {
      type: Object,
      default () {
        return {
          bio: '',
          communities: '',
          isArtist: false,
          name: '',
          picture: '',
          resilentObjects: '',
          country: {
            code: '',
            name: ''
          }
        }
      }
    }
  }
}
</script>
