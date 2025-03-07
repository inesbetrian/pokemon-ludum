<template>
    <section v-if="false" class="flex flex-col justify-center items-center w-screen h-screen ">

        <h1 class="text-3xl">Espere, por favor</h1>
        <h3 class="animate-pulse">Cargando Pokémons</h3>

    </section>

    <section class="flex flex-col justify-center items-center w-screen h-screen ">
        <h1 class="m-5">¿Quién es este Pokémon?</h1>
        <Pokemonimago/> 
        <PokemonOptiones />
    </section>
</template>



<script setup lang="ts">


import Pokemonimago from '../components/Pokemonimago.vue';
import PokemonOptiones from '../components/PokemonOptiones.vue';

   
</script>

<style scoped>

</style>