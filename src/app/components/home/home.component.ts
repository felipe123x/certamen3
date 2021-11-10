import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import {listaDiasValpo, listaDiasStgo,listaDiasBiobio,listaDiasAraucania} from '../../interfaces/dias';
import { Dias } from '../../interfaces/dias';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  activeId=1;


  listaDiasValpo=listaDiasValpo;
  
  
  constructor() { }

  ngOnInit(): void {
  }

  convertir(temp:number):number{
    return (temp*1.8)+32;
  }


}
