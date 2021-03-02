<template>
  <article class="flex flex-col items-center">
    <img
      class="rounded-full border-2 border-white shadow-md mb-4"
      :src="`https://ui-avatars.com/api/?name=${fullName}`"
      width="50%"
      height="50%"
      alt="user"
    >
    <h6 class="mb-2">
      {{ fullName }}
    </h6>
    <div class="flex items-center justify-center">
      <img
        src="https://www.countryflags.io/gt/flat/32.png"
        height="32"
        width="32"
      >
      <p class="text-sm mb-0 ml-2">
        Guatemala
      </p>
    </div>
  </article>
</template>
<script>
export default {
  props: {
    fullName: {
      type: String,
      default: ''
    }
  }
}
</script>
