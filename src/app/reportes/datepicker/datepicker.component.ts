import { Component, Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { FiltrosService } from '../filtros/filtros.service';

const I18N_VALUES: { [index: string]: any } = {
	es: {
		weekdays: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'],
		months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
		weekLabel: 'sem',
	},
	// other languages you would support
};

// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
@Injectable()
export class I18n {
	language = 'es';
}

@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {
	constructor(private _i18n: I18n) {
		super();
	}

	getWeekdayLabel(weekday: number): string {
		return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
	}
	override getWeekLabel(): string {
		return I18N_VALUES[this._i18n.language].weekLabel;
	}
	getMonthShortName(month: number): string {
		return I18N_VALUES[this._i18n.language].months[month - 1];
	}
	getMonthFullName(month: number): string {
		return this.getMonthShortName(month);
	}
	override getDayAriaLabel(date: NgbDateStruct): string {
		return `${date.day}/${date.month}/${date.year}`;
	}
}

@Injectable()
export class NgbDateCustomParserFormatter extends NgbDateParserFormatter {
	override format(date: NgbDateStruct): string {
		return date
			? `${isNumber(date.day) ? padNumber(date.day) : ""}/${isNumber(date.month) ? padNumber(date.month) : ""}/${date.year
			}`
			: "";
	}
	parse(value: string): NgbDateStruct {
		const dateParts = value.trim().split("/");
		return {
			day: toInteger(dateParts[0]),
			month: toInteger(dateParts[1]),
			year: toInteger(dateParts[2])
		};
	}
}

export function toInteger(value: any): number {
	return parseInt(`${value}`, 10);
}

export function isNumber(value: any): value is number {
	return !isNaN(toInteger(value));
}

export function padNumber(value: number) {
	if (isNumber(value)) {
		return `0${value}`.slice(-2);
	} else {
		return "";
	}
}

@Component({
	selector: 'app-datepicker',
	templateUrl: './datepicker.component.html',
	styleUrls: ['./datepicker.component.scss'],
	providers: [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }], // define custom NgbDatepickerI18n provider
})
export class DatepickerComponent {

	constructor(private filtrosService: FiltrosService) {
		this.fechas = { fechaDesde: '', fechaHasta: '' };
	}

	fechas: {
		fechaDesde: string;
		fechaHasta: string;
	};
	fechaDesde: NgbDateStruct | undefined;
	fechaHasta: NgbDateStruct | undefined;

	filtrarFecha() {
		if (this.fechaDesde && this.fechaHasta) {
			this.fechas!.fechaDesde = ('0' + this.fechaDesde.day).slice(-2) + '/' + ('0' + this.fechaDesde.month).slice(-2) + '/' + this.fechaDesde.year;
			this.fechas!.fechaHasta = ('0' + this.fechaHasta.day).slice(-2) + '/' + ('0' + this.fechaHasta.month).slice(-2) + '/' + this.fechaHasta.year;
			this.filtrosService.emitirDatosFecha(this.fechas);
		} else {
			console.log('Ingrese una fecha válida');
		}
	}

}
