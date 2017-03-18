# Angular2CesiumExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.2.

## Getting started

+ If you didn't installed Angular CLI yet:
```
npm install -g @angular/cli
```

+ Write the next commands via the command line:

```
git clone https://github.com/shiloDrot/angular2-cesium-example.git
cd angular2-cesium-example
npm install
npm run server
npm start
```
+ Navigate to `http://localhost:4200/`.

## Guide
If you want to use [Angular2-Cesium](https://www.npmjs.com/package/angular2-cesium) on working Angular2 project use the following instruction:

(Note: it must be an Angular CLI generated project, otherwise their can be some bugs at this point)

+ install `angular2-cesium` via:
  ```
  npm install --save angular2-cesium
  npm install --save cesium
  ```
+ Add `"../node_modules/cesium/Build/Cesium/Cesium.js"`
to `scripts` in `.angular-cli.json` file.

+ Add `declare var Cesium;` to `typing.d.ts` file

+ Add to `style.css`:
  ```
  @import url(/node_modules/cesium/Build/Cesium/Widgets/widgets.css);
  html, body, #cesiumContainer {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  ```
### Usage
+ Once installed you need to import our main module.
  ```
  import { AngularCesiumModule } from 'angular-cesium/angular-cesium.module';
  ```
+ In your HTML file use `ac-map` tag to show the map:
  ```
  <ac-map></ac-map>
  ```
