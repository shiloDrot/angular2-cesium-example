import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AcNotification, AcLayerComponent } from 'angular2-cesium';
import { TracksDataProvider } from '../../services/dataProvider/tracksDataProvider.service';

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
	Cesium = Cesium;
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
