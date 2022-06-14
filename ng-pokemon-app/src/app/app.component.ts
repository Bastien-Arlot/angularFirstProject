import { Component, OnInit } from '@angular/core';
import {Pokemon} from "./pokemon";
import {POKEMONS} from "./mock-pokemon-list";

@Component({
  selector: 'app-root',
  template: `<h1>Liste de Pokemons!</h1>`
})
export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit() {
    console.table(this.pokemonList);
    this.selectPokement(this.pokemonList[0]);
  }

  selectPokement(pokemon: Pokemon){

    console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
  }
}
