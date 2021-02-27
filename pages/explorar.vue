<template>
  <div class="estilo-base flex">
    <div class="h-screen w-screen grid gap-0 grid-rows-4 grid-cols-12  barra-navegacion " >
        <div class="row-span-4 col-span-2 pr-8">
            <div>
                <div class="mt-20">
                    <h1>
                        Icono
                    </h1>
                </div>
                <div class="mt-10">
                    <div class="rounded-full py-3 px-6">
                        <a href="https://www.google.com" class="no-underline tm-2" style="color: #6b7779"><i class="mr-2">icono</i>Explorar</a>
                        <br>
                        <a href="https://www.google.com" class="no-underline mt-4" style="color: #6b7779"><i class="mr-2">icono</i>Estaciones</a>
                        <br>
                        <a href="https://www.google.com" class="no-underline mt-4" style="color: #6b7779"><i class="mr-2">icono</i>Comunidades</a>
                        <br>
                        <a href="https://www.google.com" class="no-underline mt-4" style="color: #6b7779"><i class="mr-2">icono</i>Artistas</a>
                    </div>
                </div>
                <div class="mt-48 ml-10 mr-8 px-2 pt-4 pb-8 rounded box-content w-48 shadow-2xl" style="background: #ffffff;">
                  <i>
                    Icono
                  </i>
                  <p class="text-center">Registrate para obtener más beneficios</p>
                  <button class="bg-green-500 px-4 py-2 text-white">ÚNETE AHORA</button>
                </div>
            </div>
        </div>
        <div class="col-span-8 row-span-4 rounded-l-lg contenido-fondo py-12 px-8">
          <div class="box-content mb-10">
            <h2 class="text-left">Explorar</h2>
          </div>
          <div class="box-content w-75 text-left pt-20 pl-8 pb-2 rounded-lg" style="background: red;">
            <h3 class="text-2xl">VEDI Quetzaltenango</h3>
            <p class="text-sm"><i>i</i>  Guatemala</p>
            <p class="text-sm">
              <i> i</i>
              <i> i</i>
                ## personas
            </p>
          </div>
          <div>
            si
          </div>
        </div>
        <div class="col-span-2 row-span-4 contenido-fondo">
          no
        </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.estilo-base {
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
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
</style>
