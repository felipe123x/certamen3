import { Component, OnInit } from '@angular/core';
import { listaDiasBiobio } from '../../interfaces/dias';

@Component({
  selector: 'app-biobio',
  templateUrl: './biobio.component.html',
  styleUrls: ['./biobio.component.scss']
})
export class BiobioComponent implements OnInit {

  activeId=1;
  listaDiasBiobio=listaDiasBiobio;

  constructor() { }

  ngOnInit(): void {
  }

  convertir(temp:number):number{
    return (temp*1.8)+32;
  }

}
