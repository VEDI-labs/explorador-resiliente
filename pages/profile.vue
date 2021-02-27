<template>
  <div>
    <div class="mx-auto my-2 flex flex-center justify-center">
      <BiocreativaLogo />
    </div>
    <div class="mx-auto my-2 flex flex-center justify-center">
      <h3>Artistas</h3>
    </div>
    <div class="mx-auto my-2 flex flex-center justify-center">
      <h4>Nombre_Artista</h4>
    </div>
    <div class="mx-auto my-2 flex flex-center justify-center">
      <p>Pais</p>
    </div>
    <div class="mx-auto my-2 flex flex-center justify-center">
      <p>Descripcion</p>
    </div>
    <div class="mx-auto my-2 flex flex-center justify-center">
      <button class ="button">Sonidos</button>
      <button class ="button">Objetos</button>
      <button class ="button">Comunidades</button>
      <button class ="button">Fotografías</button>
    </div>
    </div>
  </div>
</template>
<script>
import BiocreativaLogo from '~/assets/svg/biocreativa.svg'
export default {
  components: {
    BiocreativaLogo
  }
}
</script>
<style lang="postcss" scoped>
  .button{
    @apply bg-white px-4 py-2 text-primary-500
  }

</style>
