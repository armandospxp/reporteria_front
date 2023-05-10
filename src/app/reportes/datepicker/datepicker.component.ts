import { Component, Injectable } from '@angular/core';
import { NgbDateStruct, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

const I18N_VALUES: {[index: string]:any} = {
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

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }], // define custom NgbDatepickerI18n provider
})
export class DatepickerComponent {
  fechaDesde: NgbDateStruct | undefined;
  fechaHasta: NgbDateStruct | undefined;
}
