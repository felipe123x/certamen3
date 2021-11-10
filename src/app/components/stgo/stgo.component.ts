import { Component, OnInit } from '@angular/core';
import { listaDiasStgo } from '../../interfaces/dias';

@Component({
  selector: 'app-stgo',
  templateUrl: './stgo.component.html',
  styleUrls: ['./stgo.component.scss']
})
export class StgoComponent implements OnInit {

  activeId=1;
  listaDiasStgo=listaDiasStgo;

  constructor() { }

  ngOnInit(): void {
  }

  convertir(temp:number):number{
    return (temp*1.8)+32;
  }

}
