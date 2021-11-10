import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  activeId=1; 

  formulario:FormGroup;

  constructor(public FormB:FormBuilder) {
    this.formulario=this.FormB.group({
      region:["",Validators.required],
      clima:["",Validators.required],
      dia:["",Validators.required],
      temperatura:["",Validators.required],
      grados:["",Validators.required]
    })
   }

   validacion(){
     this.formulario.get("nombre")?.value;
   }

  ngOnInit(): void {
  }

}
