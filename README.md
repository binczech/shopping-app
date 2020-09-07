**About**

This small project was created for learning purposes. It is a small React app for listing and showing shopping leaflets. It uses simple API from repository [Shopping App API](https://github.com/binczech/shopping-app-api).

**Task**

The goal is to prepare a simple website like Kupi.cz.
The website will contain three pages: HP, a leaflet page and a list of discounts.
All pages will have in common:
1. Header with links:
  * Leaflets - leads to HP
  * Discounts - leads to a list of discounts
2. Shopping list:
  * Solve only on the client side, e.g. via local storage - nothing will be stored on the server
  * Lists stored notes
  * At the end a text input with an insert button

* HP website
  * Data are in `hp.json`
  * As on HP Kupi, list the individual categories with links to leaflets
* Leaflet page
  * See https://www.kupi.cz/letak/penny-market-letak-ctvrtecnik-164
  * Data are in `leaflet.json`
  * For all 4 links from HP, print the same content from the `leaflet.json` data file. Just follow the url slug of the leaflet.
  * Here you just set the width of the image at the img tag
* Discount page
  * See https://www.kupi.cz/slevy/alkohol
  * Data are in `discounts.json`
* All three data files are included in [Shopping App API](https://github.com/binczech/shopping-app-api)

**Prerequisities**
* [Node.js](https://nodejs.org/)
* Already running API on port 3001 from repository [Shopping App API](https://github.com/binczech/shopping-app-api)

**How to run**

1. `npm install`
2. `npm start`
3. Open browser on URL http://localhost:3000

**Dependencies**

Installed by running `npm install`

* React
* React Bootstrap
* React Router DOM
* React Redux
* Redux Logger
* Redux Thunk
* Axios
* Node Sass