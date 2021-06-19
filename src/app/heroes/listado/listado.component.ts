import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'})

export class ListadoComponent{

  heroes:string[] = ['Spiderman','IronMan','Hulk','Thor','Captain America'];

  HeroeBorrado:string= ''; 

  borrarHeroes(){
    //Quita el primer elemento del arreglo
    this.HeroeBorrado = this.heroes.shift() || '';

    //Borrar todo el array
    //this.heroes = [];
  }
}