import { Component } from '@angular/core';
import { MapLayerProviderOptions } from 'angular2-cesium/src/main';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  arcGisMapServerProvider = MapLayerProviderOptions.ArcGisMapServer;
}
