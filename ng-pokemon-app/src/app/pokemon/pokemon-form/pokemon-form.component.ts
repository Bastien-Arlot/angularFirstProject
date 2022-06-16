
import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon";
import {PokemonService} from "../pokemon.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styles: [
  ]
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon: Pokemon;
  pokemonList: Pokemon[];
  types: string[];

  constructor(private pokemonService: PokemonService, router: Router) {
  }

  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if(isChecked){
      this.pokemon.types.push(type);
    }else{
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
}


  }
  onsubmit() {
    console.log('submit formn');
    this.router.navigate(['/pokemon' , this.pokemon.id]);
}

}
