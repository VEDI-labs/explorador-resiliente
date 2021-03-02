<template>
  <div class="flex flex-col items-start w-full">
    <h1>Comunidades</h1>
    <section class="flex flex-col items-start w-full">
      <h4 class="mb-4">
        Guatemala
      </h4>
      <div class="grid grid-cols-8 w-full gap-x-4 gap-y-6">
        <CommunityCard class="col-span-4" />
        <CommunityCard class="col-span-4" />
        <CommunityCard class="col-span-4" />
        <CommunityCard class="col-span-4" />
        <CommunityCard class="col-span-4" />
      </div>
    </section>
    <section class="flex flex-col items-start w-full mt-16">
      <h4 class="mb-4">
        México
      </h4>
      <div class="grid grid-cols-8 w-full gap-x-4 gap-y-6">
        <CommunityCard class="col-span-4" />
        <CommunityCard class="col-span-4" />
        <CommunityCard class="col-span-4" />
        <CommunityCard class="col-span-4" />
        <CommunityCard class="col-span-4" />
      </div>
    </section>
  </div>
</template>
<script>
import CommunityCard from '~/components/CommunityCard'
export default {
  components: {
    CommunityCard
  }
}
</script>
