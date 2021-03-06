import {Component, Input} from '@angular/core'

import {BaseInputComponent} from '../base/baseInput.component'
import {TextareaFieldDataInterface} from './textarea.interfaces'


@Component({
	selector: 'rui-textarea',
	templateUrl: './textarea.template.html'
})
export class TextareaComponent extends BaseInputComponent {
	@Input()
	fieldData: TextareaFieldDataInterface

	maxRows: number = 10
	minRows: number = 10

	constructor() {
		super()
	}

	ngOnInit(): void {
		super.ngOnInit()
		const {maxRows, minRows} = this.fieldData
		if (maxRows) {
			this.maxRows = maxRows
		}
		if (minRows) {
			this.minRows = minRows
		}
	}
}
