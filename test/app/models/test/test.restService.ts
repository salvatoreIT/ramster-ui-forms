import co from 'co'
import {Injectable} from '@angular/core'

import {BaseRESTService, GlobalEventsService, RequestService} from 'ramster-ui-core'


@Injectable()
export class TestModelRESTService extends BaseRESTService {
	constructor(globalEventsService: GlobalEventsService, requestService: RequestService) {
		super(globalEventsService, requestService)
		this.baseUrl += 'testModel'
	}
}
