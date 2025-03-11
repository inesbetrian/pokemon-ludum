import { computed, onMounted, ref } from 'vue';
import { LudumStatuts, type Pokemon, type PokemonListaResponsio } from '../interfaces';
import { pokemonApi } from '@/api/pokemonApi';

export const usePokemonLudum = () => {
  const ludumStatuts = ref<LudumStatuts>(LudumStatuts.Ludit);

  const pokemons = ref<Pokemon[]>([]);

  const pokemonOptiones = ref<Pokemon[]>([]);

  const estPortat = computed(() => pokemons.value.length === 0);

  const obtinePokemons = async (): Promise<Pokemon[]> => {
    const responsio = await pokemonApi.get<PokemonListaResponsio>('/?limit=151');

    const pokemonArray: Pokemon[] = responsio.data.results.map((pokemon) => {
      const urlPartes = pokemon.url.split('/');

      const id = urlPartes[urlPartes.length - 2] ?? 0;

      return {
        nomen: pokemon.name,
        id: +id,
      };
    });

    return pokemonArray.sort(() => Math.random() - 0.5);
  };

  const sequentiOptiones = (quot: number = 4) => {
    ludumStatuts.value = LudumStatuts.Ludit;

    pokemonOptiones.value = pokemons.value.slice(0, quot);

    pokemons.value = pokemons.value.slice(quot);
  };

  onMounted(async () => {
    await new Promise((r) => setTimeout(r, 500));
    pokemons.value = await obtinePokemons();
    sequentiOptiones();
  });

  return {
    ludumStatuts,
    estPortat,
    pokemonOptiones,
    sequentiOptiones,
  };
};
