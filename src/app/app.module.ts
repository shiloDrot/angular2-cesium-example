import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularCesiumModule } from '../../node_modules/angular2-cesium';
import { AppComponent } from './app.component';
import { SettingsComponent } from  './components/settings-component/settings.component'

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularCesiumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
