import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "../config/util/guards/auth.guard";

const routes: Routes = [
    {
        path:'',
        component:MainComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class ReportesRoutingModule{}