# Indian Places

List of india places including pincode. [Demo](https://epicx67.github.io/indian_places_demo/)

### Installation

    npm i indian_places

## Example

```javascript
const ip = require("indian_places");

// To get the states
const states = ip.getStates();

// To get the district of a state
const westBengal = states.find((item) => item.name === "West Bengal");
const districtsOfWb = westBengal.getDistricts();

// To get places of a specific district
const north24Pgs = districtsOfWb.find(
  (item) => item.name === "North 24 parganas"
);
const places = north24Pgs.getPlaces();

// To get places by pincode
// This function will return empty array if that pincode doesn't exists
const places = ip.getPlacesByPin(743271);
```

## Functions

To get place data, package contains essential functions which will help you to retrive exact place from mapped data. I described little bit about object types below.

| func()                  | parameter            | returns                   |
| ----------------------- | -------------------- | ------------------------- |
| getStates()             | None                 | Array of **State** Obj    |
| getDistricts_by_state() | **State** - obj      | Array of **District** Obj |
| getPlaces_by_district() | **District** - obj   | Array of **Place** Obj    |
| getPlacesByPin()        | **pincode** - number | Array of State Obj        |

## Objects

#### State Object

| member         | description                           |
| -------------- | ------------------------------------- |
| name           | State name                            |
| getDistricts() | Method to get districts of that state |

#### District Object

| member      | description                           |
| ----------- | ------------------------------------- |
| name        | District name                         |
| state       | State name of that district           |
| getPlaces() | Method to get places of that district |

#### Place Object

| member   | description                 |
| -------- | --------------------------- |
| name     | Place name                  |
| district | District name of that place |
| state    | State name of that place    |
| pin      | Pincode of that place       |

### At last

> If you like this wrapper package please give this repo a star :)

Credits,
[India gov data portal](https://data.gov.in/)
