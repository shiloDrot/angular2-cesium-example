import { AcEntity } from 'angular2-cesium';

export function convertToCesiumObj(entity): any {

  let yellowMatirial = new Cesium.Material({
    fabric : {
      type : 'Color',
      uniforms : {
        color : new Cesium.Color(1.0, 1.0, 0.0, 1.0)
      }
    }
  });

  let redMatirial = new Cesium.Material({
    fabric : {
      type : 'Color',
      uniforms : {
        color : new Cesium.Color(1.0, 0.0, 0.0, 1.0)
      }
    }
  });

	entity.dynamicPolyline = {
		width : 2,
		positions: Cesium.Cartesian3.fromDegreesArray(
			[
				Math.floor(Math.random() * 50), Math.floor(Math.random() * 50),
				Math.floor(Math.random() * 50), Math.floor(Math.random() * 50)
			]),
		material: entity.id === 1 ? yellowMatirial : redMatirial
	};

	return AcEntity.create(entity);
}

