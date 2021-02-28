<template>
  <div class="estilo-base flex">
    <div class="h-screen w-screen grid gap-0 grid-rows-4 grid-cols-12  barra-navegacion ">
      <div class="col-span-2 row-span-4 pr-8">
        <div>
          <div class="mt-20 flex items-center justify-center">
            <Logo />
          </div>
          <div class="mt-10">
            <div class="rounded-full py-3 px-6">
              <div class="flex items-center mb-4">
                <div class="bg-primary-300 w-8 h-8 rounded-lg flex items-center justify-center">
                  <IconCompass color="white" height="24" width="24" />
                </div>
                <a href="https://www.google.com" class="no-underline tm-2 text-gray-700 ml-4">Explorar</a>
              </div>
              <div class="flex items-center mb-4">
                <div class="bg-accent-300 w-8 h-8 rounded-lg flex items-center justify-center">
                  <IconRadio color="white" height="24" width="24" />
                </div>
                <a href="https://www.google.com" class="no-underline tm-2 text-gray-700 ml-4">Estaciones</a>
              </div>
              <div class="flex items-center mb-4">
                <div class="bg-yellow-500 w-8 h-8 rounded-lg flex items-center justify-center">
                  <IconWorld color="white" height="24" width="24" />
                </div>
                <a href="https://www.google.com" class="no-underline tm-2 text-gray-700 ml-4">Comunidades</a>
              </div>
              <div class="flex items-center mb-4">
                <div class="bg-red-500 w-8 h-8 rounded-lg flex items-center justify-center">
                  <IconGuitar color="white" height="24" width="24" />
                </div>
                <a href="https://www.google.com" class="no-underline tm-2 text-gray-700 ml-4">Artistas</a>
              </div>
            </div>
          </div>
          <div class="mt-48 ml-10 mr-8 px-2 pt-4 pb-8 rounded box-content w-48 shadow-2xl" style="background: #ffffff;">
            <i>
              Icono
            </i>
            <p class="text-center">
              Registrate para obtener más beneficios
            </p>
            <button class="bg-green-500 px-4 py-2 text-white">
              ÚNETE AHORA
            </button>
          </div>
        </div>
      </div>
      <div class="col-span-8 row-span-4 rounded-l-lg contenido-fondo py-12 px-8">
        <Nuxt />
      </div>
      <div class="col-span-2 row-span-4 bg-gray-50">
        <section class="similar-stations">
          <h4>Estaciones similares</h4>
          <section>
            <RadioCard />
            <button>Ver más estaciones</button>
          </section>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import IconCompass from '~/components/icons/IconCompass'
import IconRadio from '~/components/icons/IconRadio'
import IconWorld from '~/components/icons/IconWorld'
import IconGuitar from '~/components/icons/IconGuitar'
import RadioCard from '~/components/RadioCard.vue?inline'

export default {
  components: {
    IconCompass,
    IconRadio,
    IconWorld,
    IconGuitar,
    Logo,
    RadioCard
  }
}
</script>

<style lang="postcss" scoped>
body {
  @apply min-h-full;
  @apply min-w-full;
}

.estilo-base {
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.barra-navegacion {
  background: #eef7fe;
}
.contenido-fondo {
  background: #ffffff;
}
.unete-ahora{
  background-color: #00d8a4;
  color: white;
}

.similar-stations {
  @apply text-left;
  @apply px-4;

  & button {
    @apply block;
    @apply mx-auto;
  }
}
</style>
