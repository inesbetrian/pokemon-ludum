<template>

  <section class="flex flex-col mt-5">

    <button 
    
    v-for="{ nomen, id } in optiones" 
    :key="id" 
    @click="$emit('electusOptio', id)"
    class="capitalize"
    >
   
    {{ nomen  }}
    </button>

  </section>
 


</template>

<script lang="ts" setup>
import type { Pokemon } from '../interfaces';


  interface Props{
    optiones: Pokemon[];
  }

  defineProps<Props>();

  defineEmits<{
    electusOptio: [id: number];
  }>();

</script>

<style scoped>
@import 'tailwindcss';

button {
  @apply bg-white shadow-md rounded-lg p-3 my-2 cursor-pointer w-40 text-center hover:bg-gray-100 transition-all;
}
</style>
