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
import { SidebarComponent } from 'src/assets/sidebar/sidebar.component';




@NgModule({
  declarations: [
    MainComponent,
    GraficoBarrasComponent,
    GraficoPieComponent,
    GraficoLineasComponent,
    GraficoTreeComponent,
    GraficoComparativoLineaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
  ],
  exports:[MainComponent],
  providers: [ReportesService, SidebarComponent]
})
export class ReportesModule { }
