import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/assets/header/header.component';
import { SidebarComponent } from 'src/assets/sidebar/sidebar.component';
import { FooterComponent } from 'src/assets/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportesModule } from './reportes/reportes.module';
import { ReportesService } from './reportes/reportes.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ReportesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
