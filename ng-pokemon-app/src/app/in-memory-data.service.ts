import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {POKEMONS} from './pokemon/mock-pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const pokemons = POKEMONS; //obligé de le faire en deux fois car on ne peut pas pas passer la constante dans une déclaration
    return {pokemons}
  }
}