import {Component, Input} from '@angular/core'

import {BaseInputComponent} from '../base/baseInput.component'
import {CheckboxFieldDataInterface} from './checkbox.interfaces'


@Component({
	selector: 'rui-checkbox',
	templateUrl: './checkbox.template.html'
})
export class CheckboxComponent extends BaseInputComponent {
	@Input()
	fieldData: CheckboxFieldDataInterface


	constructor() {
		super()
	}

	ngOnInit(): void {
		super.ngOnInit()
	}
}
