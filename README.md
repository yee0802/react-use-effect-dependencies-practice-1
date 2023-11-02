# Use Effect Practice 1

## Learning Objectives
- Build a component with an effect hook that watches for changes to a given value and triggers the effect

## Setup

1. Fork this repository
2. Clone the forked repository onto your local machines
3. In the root directory, type `npm ci`, which installs dependencies for the project
4. Finally, type `npm run dev`, which starts a development server that runs your website in the browser.

## Instructions
- In `App.jsx` set up a `useEffect` to run whenever the `dataType` state is changed
- When the effect is triggered, make a `fetch` request to `https://swapi.dev/api/${dataType}/`
  - NOTE: you must include the ending `/` in your API URL
  - The string values which `dataType` can have are: `people`, `planets` and `starships`
- Store the returned JSON data in the `data` state using `setData`
