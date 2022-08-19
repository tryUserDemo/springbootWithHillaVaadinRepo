import '@vaadin/button';
import '@vaadin/text-field';
import '@vaadin/number-field';
import '@vaadin/date-picker';
import '@vaadin/form-layout';
import '@vaadin/form-layout/vaadin-form-item';
import '@vaadin/grid/vaadin-grid';
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { View } from 'Frontend/views/view';
import { Binder, field } from '@hilla/form';
import { getFlightList, save } from 'Frontend/generated/FlightEndpoint';
import FlightItem from 'Frontend/generated/com/example/application/FlightItem';
import FlightItemModel from 'Frontend/generated/com/example/application/FlightItemModel';

@customElement('flight-view')
export class FlightView extends View {

	@state()
	private flightList: FlightItem[] = [];
	private binder = new Binder(this, FlightItemModel);

	render() {
		
		return html`
	
			<div class="p-m">
				
				<div>
				
					<vaadin-form-layout>
						<vaadin-form-item>
							<vaadin-text-field ${field(this.binder.model.airline)} label="Airline"></vaadin-text-field>
						</vaadin-form-item>
						<vaadin-form-item>			
							<vaadin-text-field ${field(this.binder.model.fromAirport)} label="FromAirport"></vaadin-text-field>
						</vaadin-form-item>
						<vaadin-form-item>				
							<vaadin-text-field ${field(this.binder.model.toAirport)} label="ToAirport"></vaadin-text-field>
						</vaadin-form-item>
						<vaadin-form-item>				
							<vaadin-date-picker ${field(this.binder.model.scheduledDateTime)} label="ScheduledDateTime"></vaadin-date-picker>
						</vaadin-form-item>
						<vaadin-form-item>				
							<vaadin-date-picker ${field(this.binder.model.estimatedDateTime)} label="EstimatedDateTime"></vaadin-date-picker>
						</vaadin-form-item>
						<vaadin-form-item>				
							<vaadin-date-picker ${field(this.binder.model.actualDateTime)} label="ActualDateTime"></vaadin-date-picker>
						</vaadin-form-item>
						<vaadin-form-item>			
							<vaadin-button theme="primary" @click=${this.addItem} ?disabled=${this.binder.invalid}>Add</vaadin-button>
						</vaadin-form-item>
					</vaadin-form-layout>	
				
				</div>
			
				<h3>Flight List</h3>
				<vaadin-grid .items="${this.flightList}" .page-size="${10}" .paginator-size="${5}"  
					theme="row-stripes" style="max-width: 100%">
					<vaadin-grid-column path="id"></vaadin-grid-column>
					<vaadin-grid-column path="airline"></vaadin-grid-column>
					<vaadin-grid-column path="fromAirport"></vaadin-grid-column>
					<vaadin-grid-column path="toAirport"></vaadin-grid-column>
					<vaadin-grid-column path="scheduledDateTime"></vaadin-grid-column>
					<vaadin-grid-column path="estimatedDateTime"></vaadin-grid-column>
					<vaadin-grid-column path="actualDateTime"></vaadin-grid-column>
				</vaadin-grid>

			</div>
    	`;
	}

	async addItem() {
		const item = await this.binder.submitTo(save);
		if (item) {
			this.firstUpdated();
			this.binder.clear();
		}
	}

	async firstUpdated() {
		const returnList = await getFlightList();
		this.flightList = returnList;
	}
}