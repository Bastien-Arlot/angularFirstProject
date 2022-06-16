import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon";
import {Router} from "@angular/router";
import {PokemonService} from "../pokemon.service";

@Component({
    selector: 'app-list-pokemon',
    templateUrl: './list-pokemon.component.html',
    styles: []
})
export class ListPokemonComponent implements OnInit{


    pokemonList: Pokemon[];

    constructor(
        private router: Router,
        private pokemonService: PokemonService
    ) {
        // const pokemonService = new PokemonService() A ABSOLUMENT PAS FAIRE LORS DE L"UTILISATION DE SERVICE
    }
    ngOnInit(){
        this.pokemonList = this.pokemonService.getPokemonList();
    }

    goToPokemon(pokemon: Pokemon) {
        this.router.navigate(['/pokemon', pokemon.id]);
    }
}
