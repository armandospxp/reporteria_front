import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './reportes/login/login.component';
import { AuthGuard } from './config/util/guards/auth.guard';

const routes: Routes = [
  {
    path:'reportes',
    loadChildren: () => import('./reportes/reportes.module').then(x => x.ReportesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
