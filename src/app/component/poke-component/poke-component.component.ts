import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-component',
  templateUrl: './poke-component.component.html',
  styleUrls: ['./poke-component.component.css']
})
export class PokeComponentComponent implements OnInit {
  pokeName!: string;
  urlImage:string="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png";
  type:string="none";
  type2:string="";
  name:string="none";
  hp:string="none";
  attack:string="none";
  defense:string="none";
  sAttack:string="none";
  sDefense:string="none";
  speed:string="none";
  constructor(private pokemonService :PokemonService) { }

  ngOnInit(): void {
  }
  searchPokemon(){
    console.log("Funciona"+this.pokeName)
    this.pokemonService.getPokemon(this.pokeName.toLowerCase()).subscribe((res:any)=>{
      this.urlImage=res.sprites.front_default;
      this.name=res.name;
      this.type=res.types[0].type.name;

      this.hp=res.stats[0].base_stat;
      this.attack=res.stats[1].base_stat;
      this.defense=res.stats[2].base_stat;
      this.sAttack=res.stats[3].base_stat;
      this.sDefense=res.stats[4].base_stat;
      this.speed=res.stats[5].base_stat;
      this.type2=res.types[1].type.name;
      console.log(res);
    })
  }
}
