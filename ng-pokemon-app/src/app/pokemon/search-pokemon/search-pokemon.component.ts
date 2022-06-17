import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {Pokemon} from "../pokemon";
import {PokemonService} from "../pokemon.service";

@Component({
    selector: 'app-search-pokemon',
    templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit {

    searchTerms = new Subject<string>(); // Subject = class RxJS {..."ab".."abc"..."abc} il prend un flux qui prend les characteres dans le temps
    pokemons$: Observable<Pokemon[]>; //{...pokemonList(a)...pokemonList(ab)... etc}
    // le $ est une convention pour représenter les flux
    constructor(private router: Router,
                private  pokemonService : PokemonService) {
    }

    ngOnInit(): void {
        this.pokemons$ = this.searchTerms.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((term) => this.pokemonService.searchPokemonList(term))
        );
    }

    search(term: string) {
        this.searchTerms.next(term); // next? = Push mais avec un flux de données
    }

    goToDetail(pokemon: Pokemon){
        const link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }

}
