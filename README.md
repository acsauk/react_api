## Objectives of project

Design a simple Customer Service UI that will help Monzo customer service team to solve customer queries as quickly as possible.

My MVP was to allow anyone using the app to be able to quickly and easily see transactions a user has made, either in their entirety or during a specific date range, along with automating some of the security questions that customers are usually met with when contacting customer service departments.

On a personal level I wanted to challenge myself with learning a new technology as I hadn't worked with React.js before starting this project.

## Technologies used

- Javascript
- jQuery
- React.js
- MUIcss framework

## How to run it

Ensure you have Node.js/npm installed on your system by typing `node -v` in your terminal/command line. If a version number appears then you're all set, otherwise see [here](https://docs.npmjs.com/getting-started/installing-node) for installation instructions.

Install all project modules and dependencies by typing the below command in your terminal/command line:

`$ npm install`

Once installed you will need to make a build of the app:

`$ npm run build`

And then to start a local server type:

`$ npm run start`

Open your browser and navigate to `localhost:8080` and the app will be ready to use.

## Features

### Load customer info from API (Account Details dropdown)

This sends an AJAX request to the server to pull down the customer's info. While the location is hardcoded to the example profile for the test this coud be easily updated for real life use by implementing a search function to search by account or user number.

### Load customer transactions from API (Account Details dropdown)

As with customer info, this sends an API request to the server to retrieve the customers transaction history. This is then formatted and displayed in its entirety in the right hand panel. For real life use a customers account of user number would need to be provided as a parameter for the AJAX request to the server.

### Filter transaction dates

By entering a specific datrange in the date input fields you can filter down the transactions shown in the right panel.

### Security Questions

For this feature to function correctly the customer transaction and customer info data must have been pulled down from the server. There are three questions based on querying the transaction and customer info data which will allow the customer service team to verify the identity of the customer. For future enhancements there could be a set of 10 questions that are randomised each time a customer's profile is loaded.
