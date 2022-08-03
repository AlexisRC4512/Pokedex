import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private Url:string ="https://pokeapi.co/api/v2/pokemon";
  constructor(private http: HttpClient) {}
  getPokemon(pokeName:string){
    return this.http.get(`${this.Url}/${pokeName}`)
  }
}
