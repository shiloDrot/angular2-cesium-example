import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularCesiumModule } from '../../node_modules/angular2-cesium';
import { AppComponent } from './app.component';
import { SettingsComponent } from  './components/settings-component/settings.component'
import { DynamicPolylineLayerComponent } from  './components/dynamic-polyline-layer/dynamic-polyline-layer.component'

import { TracksDataProvider } from  './services/dataProvider/tracksDataProvider.service'
import { WebSocketSupplier } from  './utils/websocket-supplier/websocket-supplier'

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    DynamicPolylineLayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularCesiumModule
  ],
  providers: [TracksDataProvider, WebSocketSupplier],
  bootstrap: [AppComponent]
})
export class AppModule {
}
