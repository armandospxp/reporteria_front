import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path:'home',
        component:MainComponent,
        pathMatch: 'full'
    }
    ,{
        path:'login',
        component:LoginComponent,
        pathMatch: 'full'
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class ReportesRoutingModule{}