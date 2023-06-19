import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandSeparator'
})
export class ThousandSeparatorPipe implements PipeTransform {
  transform(value: number): string {
    // Verificar si el valor es numérico
    if (isNaN(value)) {
      return value.toString();
    }

    // Convertir el número a cadena y separar los miles con puntos
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
}