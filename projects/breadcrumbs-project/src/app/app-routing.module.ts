import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecordsComponent } from './records/records.component';

const routes: Routes = [
  // {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'', component: HomeComponent,data: { title: "Root Page", breadcrums: "Home" }, 
  children:[
    {
      path:'records',
      component:RecordsComponent,
      data: { title: "Records Page", breadcrums: "Records" }
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
