import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component'; 
import { StgoComponent } from './components/stgo/stgo.component';
import { BiobioComponent } from './components/biobio/biobio.component';
import { AraucaniaComponent } from './components/araucania/araucania.component';



const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"stgo",component:StgoComponent},
  {path:"biobio",component:BiobioComponent},
  {path:"araucania",component:AraucaniaComponent},
  {path:"form", component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
