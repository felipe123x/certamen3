import { Component, OnInit } from '@angular/core';
import { listaDiasAraucania } from '../../interfaces/dias';

@Component({
  selector: 'app-araucania',
  templateUrl: './araucania.component.html',
  styleUrls: ['./araucania.component.scss']
})
export class AraucaniaComponent implements OnInit {

  activeId=1;
  listaDiasAraucania=listaDiasAraucania;

  constructor() { }

  ngOnInit(): void {
  }

  convertir(temp:number):number{
    return (temp*1.8)+32;
  }

}
