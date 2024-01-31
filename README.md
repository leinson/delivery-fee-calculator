# Wolt delivery fee calculator

This app is a frontend Wolt delivery fee calculator : "This code is needed when a customer is ready with their shopping cart and we’d like to show them how much the delivery will cost. The delivery price depends on the cart value, the number of items in the cart, the time of the order, and the delivery distance."/Wolt, GitHub

Assignment and more precise specifications: https://github.com/woltapp/engineering-internship-2024

Created with Vite+React+Typescript, node v20.1.0 & npm v9.6.4. For testing, I have chosen Jest and Cypress. The UI is implemented with the Material UI (MUI) library. Accessibility and good UX has been made sure through manual user testing and Chrome's Lighthouse tool, taking into account e.g. color contrast and proper naming of visual components. 

## Install

Make sure you have Node.js installed on your computer.

Commands:
Install dependencies: `npm install`

Run app: `npm run dev`
Click open the Local adress in the terminal.

Run tests: 
- E2E with Cypress: `npm run cypress:open` (have the app running in another terminal). Choose E2E Testing and a browser of your choice. Click on the `wolt_app.cy.ts` file to run tests.

- Jest: `npm run test`

If you run into trouble with node:
- if your version is different (check with `node -v`), change to `nvm use 20.1.0`.

## Future development

Due to time constraints, the app is not yet foolproof. Following areas need to be worked on in the future:

- There should be more precise checks of the form inputs, preferably informing the user in realtime when typing
- Higher test coverage and testing more edge cases
- "Delivery fee calculated successfully" only appears on the first calculation and after a reset. Should appear every time the Calculate button is pressed and the input is correct.
- Make sure it is up to Typescript good praxis, since this is the first project I am using Typescript in.