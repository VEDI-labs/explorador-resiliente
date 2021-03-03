<template>
  <div class="estilo-base">
    <div class="h-screen w-screen grid gap-0 grid-cols-12  barra-navegacion">
      <div class="col-span-2">
        <div class="mt-16 px-2 flex items-center justify-center">
          <Logo width="50%" />
        </div>
        <div class="mt-8">
          <NuxtLink to="/" class="MenuItem">
            <div class="Icon">
              <div class="Icon-ratio aspect-w-1 aspect-h-1">
                <div class="Icon-container bg-primary-300">
                  <IconCompass color="white" height="50%" width="50%" />
                </div>
              </div>
            </div>
            <span>Explorar</span>
          </NuxtLink>

          <div class="MenuItem">
            <div class="Icon">
              <div class="Icon-ratio aspect-w-1 aspect-h-1">
                <div class="Icon-container bg-accent-300">
                  <IconRadio color="white" height="50%" width="50%" />
                </div>
              </div>
            </div>
            <span>Estaciones</span>
          </div>

          <NuxtLink to="/communities" class="MenuItem">
            <div class="Icon">
              <div class="Icon-ratio aspect-w-1 aspect-h-1">
                <div class="Icon-container bg-yellow-500">
                  <IconWorld color="white" height="50%" width="50%" />
                </div>
              </div>
            </div>
            <span>Comunidades</span>
          </NuxtLink>

          <NuxtLink to="/artists" class="MenuItem">
            <div class="Icon">
              <div class="Icon-ratio aspect-w-1 aspect-h-1">
                <div class="Icon-container bg-red-500">
                  <IconGuitar color="white" height="50%" width="50%" />
                </div>
              </div>
            </div>
            <span>Artistas</span>
          </NuxtLink>
        </div>
        <div class="mt-8 px-4">
          <div class="px-4 py-8 rounded-xl shadow-2xl flex flex-col justify-center items-center bg-white">
            <IconUser width="50%" height="50%" />
            <p class="text-center">
              Registrate para obtener más beneficios
            </p>
            <button
              class="bg-green-500 px-4 py-2 text-white"
              @click="signUp"
            >
              ÚNETE AHORA
            </button>
          </div>
        </div>
      </div>
      <div class="col-span-8 rounded-l-2xl bg-white flex pt-4 pb-8 px-8">
        <Nuxt />
      </div>
      <div class="col-span-2 bg-white pt-4 pb-8">
        <section class="similar-stations">
          <h5>Estaciones</h5>
          <section>
            <p class="uppercase text-sm text-gray-500">
              Objetos resilientes
            </p>
            <div v-if="resilientObjects.length > 0">
              <RadioCard
                v-for="(resilientObject, index) of resilientObjects"
                :key="index"
                :item="{
                  ...resilientObject,
                  type: 'resilient-object'
                }"
              />
            </div>
            <div
              v-else
              class="flex flex-col items-center my-2"
            >
              <IconObject color="#6B7779" height="25%" width="25%" />
              <p class="text-center text-gray-500">
                No hay objetos resilientes transmitiendo .
              </p>
            </div>
          </section>
          <section class="mt-12">
            <p class="uppercase text-sm text-gray-500">
              Estaciones resilientes
            </p>
            <div v-if="stations.length > 0">
              <RadioCard
                v-for="(station, index) of stations"
                :key="index"
                :item="{
                  ...station,
                  type: 'station'
                }"
              />
            </div>
            <div
              v-else
              class="flex flex-col items-center my-2"
            >
              <IconObject color="#6B7779" height="25%" width="25%" />
              <p class="text-center text-gray-500">
                No hay estaciones resilientes transmitiendo .
              </p>
            </div>
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
import IconObject from '~/components/icons/IconObject'
import IconUser from '~/components/icons/IconUser'
import RadioCard from '~/components/RadioCard.vue?inline'

export default {
  components: {
    IconCompass,
    IconRadio,
    IconWorld,
    IconGuitar,
    IconUser,
    IconObject,
    Logo,
    RadioCard
  },
  data () {
    return {
      resilientObjects: [],
      stations: []
    }
  },
  async mounted () {
    this.resilientObjects = await this.loadData('resilient-objects')
    this.stations = await this.loadData('stations')
  },
  methods: {
    async loadData (collection) {
      const items = []
      const { docs } = await this.$fire.firestore.collection(collection).get()
      for (const doc of docs) {
        const data = doc.data()
        items.push({
          id: doc.id,
          name: data.name,
          picture: data.picture,
          status: data.status,
          ref: doc.ref
        })
      }
      return items
    },
    signUp () {
      this.$router.push('/sign-up')
    }
  }
}
</script>

<style lang="postcss" scoped>
body {
  @apply min-h-full;
  @apply min-w-full;
}

.Icon {
  @apply w-1/5;

  & .Icon-container {
    @apply rounded-lg flex justify-center items-center;
  }

  & .Icon-ratio {
    @apply h-full w-full;
  }
}

.estilo-base {
  @apply m-0;
  @apply min-h-screen;
  @apply flex;
  @apply justify-center;
  @apply items-center;
  @apply text-center;
}

.barra-navegacion {
  background: #eef7fe;
}

.unete-ahora{
  background-color: #00d8a4;
  color: white;
}

.MenuItem {
  @apply flex items-center px-4 py-4 no-underline;

  & span {
    @apply no-underline text-gray-700 ml-4;
  }

  &:hover {
    @apply cursor-pointer;
    @apply bg-white;

    & span {
     @apply text-primary-300;
    }
  }
}

.IconContainer {
  position: relative;
  padding-bottom: 100%;
  width: 100%;
  height: 0;
  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
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
