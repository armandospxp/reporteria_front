import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { GraficoBarrasComponent } from './grafico-barras/grafico-barras.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GraficoPieComponent } from './grafico-pie/grafico-pie.component';
import { GraficoLineasComponent } from './grafico-lineas/grafico-lineas.component';
import { GraficoTreeComponent } from './grafico-tree/grafico-tree.component';
import { ReportesService } from './reportes.service';
import { HttpClientModule } from '@angular/common/http';
import { GraficoComparativoLineaComponent } from './grafico-comparativo-linea/grafico-comparativo-linea.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { GraficoGaugeComponent } from './grafico-gauge/grafico-gauge.component';
import { GraficoVariacionBancaTipoComponent } from './grafico-variacion-banca-tipo/grafico-variacion-banca-tipo.component';
import { LoginComponent } from './login/login.component';
import { ReportesRoutingModule } from './reportes-routing.module';




@NgModule({
  declarations: [
    MainComponent,
    GraficoBarrasComponent,
    GraficoPieComponent,
    GraficoLineasComponent,
    GraficoTreeComponent,
    GraficoComparativoLineaComponent,
    FiltrosComponent,
    DatepickerComponent,
    GraficoGaugeComponent,
    GraficoVariacionBancaTipoComponent,
    LoginComponent
  ],
  imports: [
    ReportesRoutingModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
    NgbDatepickerModule,
    NgHttpLoaderModule.forRoot(),
  ],
  exports:[MainComponent, FiltrosComponent, DatepickerComponent],
  providers: [ReportesService]
})
export class ReportesModule { }
