import {Component, OnInit} from '@angular/core';
import {Pokemon} from "./pokemon";
import {POKEMONS} from "./mock-pokemon-list";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    pokemonList: Pokemon[] = POKEMONS;
    pokemonSelected: Pokemon | undefined;

    ngOnInit() {
        console.table(this.pokemonList);
    }

    selectPokement(pokemonId: string) {
        const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
        if (pokemon) {
            console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
            this.pokemonSelected = pokemon;
        } else {
            console.log("Vous avez demandé un pokemon qui n'existe pas");
            this.pokemonSelected = pokemon;
        }

    }
}
