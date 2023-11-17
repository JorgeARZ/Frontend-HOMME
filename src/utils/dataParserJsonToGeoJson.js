class DataPoint {
  constructor() {
    this.type = 'Feature'
    this.properties = {}
    this.geometry = {
      type: 'Point',
      coordinates: []
    }
  }

}


class GeoJson {
  constructor() {
    this.type = 'FeatureCollection'
    this.features = []
  }
}


export function ParseJsonToGeoSon(jsonObject) {
  let geoJson = {

  }

}
