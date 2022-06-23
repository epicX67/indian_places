const IP = require("../../src/index");

export const test_place = (state_name:string, district_name:string|null = null, place_name:string|null = null) => {
  let states = IP.get_states();
  for (let state of states) {
    if (state.name === state_name) {
      if (district_name === null) return true

      const districts = state.get_districts();
      for (let district of districts) {
        if (district.name === district_name) {
          if (place_name === null) return true;

          let places = district.get_places();
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

export const test_pin = (pin:number) => {
  let places = IP.get_places_by_pin(pin)
  return places.length > 0 ? true : false
}
