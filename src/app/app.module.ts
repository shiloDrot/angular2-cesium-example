import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularCesiumModule } from '../../node_modules/angular2-cesium';
import { AppComponent } from './app.component';
import { SettingsComponent } from  './components/settings-component/settings.component'
import { DynamicPolylineLayerComponent } from  './components/dynamic-polyline-layer/dynamic-polyline-layer.component'

import { TracksDataProvider } from  './services/data-provider/tracksDataProvider.service'
import { WebSocketSupplierService } from  './services/websocket-supplier/websocket-supplier.service'

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
  providers: [TracksDataProvider, WebSocketSupplierService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
