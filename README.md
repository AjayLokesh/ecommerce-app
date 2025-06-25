This is a simple full-stack e-commerce website built with React, Vite, MongoDB, Express, HTML, and TailwindCSS. The site displays products from a MongoDB database, allows users to add items to a shopping cart, and provides a responsive UI with persistent cart data using local browser storage.

## Features
Navigation Bar
Lets users move between:
-Home
-Cart
-Contact

Home Page (Product List)
Displays a list of products pulled from the MongoDB database through the backend API.
![Home Page](images/home.png)

Add to Cart
Each product can be added to a cart, with quantity controls and item removal support.

Cart Page
View all added products
Increase/decrease quantity of each product
Remove items
See individual and total prices
Cart data is saved in the browser’s local storage, so it persists after refreshing or closing the browser.
![Cart Page](images/cart.png)

Contact Page
Displays contact details (email + phone number).
![Contact Page](images/contact.png)

## Tech stack
### Front end
- React with Vite

- TailwindCSS for styling

- React Router DOM for routing

- Axios for API calls

- LocalStorage for cart persistence

## Back-End
- Express.js for server and routing

- MongoDB with Mongoose for database access

- CORS for handling cross-origin requests

- Nodemon for development server reloads

## Requirements
Node.js and npm installed

MongoDB running locally or via cloud (e.g. MongoDB Atlas)

### Installation
#### Clone the Repository
git clone https://github.com/AjayLokesh/ecommerce-app
cd ecommerce-app

#### Back-End Setup
cd back-end
npm install
npm run dev
Make sure to update app.js to connect to your MongoDB URI.

#### Front-End Setup
cd ../e-commerce
npm install
npm run dev
This will start the frontend on http://localhost:5173 (default Vite port).

## Data Persistence
The cart state is stored in the browser using localStorage, so even if the user closes or refreshes the page, their cart items will still be there when they return.

