export interface PokemonModel {
	height: number;
	id: number;
	name: string;
	weight: number;
	sprites: Sprites;
}

export interface Sprites {
	back_default: string | null;
	back_female: string | null;
	back_shiny: string | null;
	back_shiny_female: string | null;
	front_default: string | null;
	front_female: string | null;
	front_shiny: string | null;
	front_shiny_female: string | null;
}
