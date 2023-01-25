# Use Effect Practice 1

## Learning Objectives
- Build a component with an effect hook that watches for changes to a given value and triggers the effect

## Instructions
- In `App.js` set up a `useEffect` to run whenever the `dataType` state is changed
- When the effect is triggered, make a `fetch` request to `https://swapi.dev/api/${dataType}/`
  - NOTE: you must include the ending `/` in your API URL 
- Store the returned JSON data in the `data` state using `setData`
