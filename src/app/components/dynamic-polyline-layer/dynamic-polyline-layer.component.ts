import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AcNotification, AcLayerComponent } from '../../../../node_modules/angular2-cesium';
import { TracksDataProvider } from '../../../utils/services/dataProvider/tracksDataProvider.service';

@Component({
	moduleId: module.id,
	selector: 'dynamic-polyline-layer',
	templateUrl: 'dynamic-polyline-layer.component.html',
	styleUrls: ['dynamic-polyline-layer.component.css'],
	providers: [TracksDataProvider]
})
export class DynamicPolylineLayerComponent implements OnInit {
	@ViewChild(AcLayerComponent) layer: AcLayerComponent;

	polylines$: Observable<AcNotification>;
	show = true;

	constructor(private tracksDataProvider: TracksDataProvider) {
	}

	ngOnInit() {
		this.polylines$ = this.tracksDataProvider.get();
	}

	removeAll() {
		this.layer.removeAll();
	}

	setShow($event) {
		this.show = $event
	}

}
