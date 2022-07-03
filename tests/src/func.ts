const IP = require("../../src/index");

export const testPlace = (state_name:string, district_name:string|null = null, place_name:string|null = null) => {
  let states = IP.getStates();
  for (let state of states) {
    if (state.name === state_name) {
      if (district_name === null) return true

      const districts = state.getDistricts();
      for (let district of districts) {
        if (district.name === district_name) {
          if (place_name === null) return true;

          let places = district.getPlaces();
          for (let place of places) {
            if (place.name === place_name) return true;
          }
          return false;
        }
      }
      return false;
    }
  }

  return false;
}

export const testPin = (pin:number) => {
  let places = IP.getPlacesByPin(pin)
  return places.length > 0 ? true : false
}
