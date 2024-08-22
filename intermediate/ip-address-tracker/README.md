# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [How to Get an API Key from GeoIP](#how-to-get-an-api-key-from-geoip)
- [How to run locally](#how-to-run-locally)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Links

- Solution URL: [Click here](https://www.frontendmentor.io/solutions/ip-address-tracker-AJnNHnYUyQ)
- Live Site URL: [Click here](https://stalwart-crostata-178707.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

## How to Get an API Key from GeoIP

### 1. Sign Up for an Account
- Go to the [ipify GeoIP website](https://www.ipify.org/).
- Click on the "Sign Up" or "Get Started" button.
- Fill in the required information, such as your name, email address, and password, then create your account.

### 2. Verify Your Email
- After signing up, you will receive a verification email. Click on the verification link in the email to activate your account.

### 3. Choose a Plan
- Once your account is activated, log in to the GeoIP dashboard.
- Choose a suitable pricing plan based on your project needs. GeoIP offers both free and paid plans. The free plan usually includes a limited number of requests per month.

### 4. Obtain Your API Key
- After selecting your plan, you will be redirected to the dashboard.
- In the dashboard, you will see your API key. Copy this key, as you'll need it to access the GeoIP services in your project.

### 5. Add the API Key to Your Project
- In your project folder, create a `.env` file if you haven't already.
- Add the API key to the `.env` file as follows:

    ```bash
    VITE_API_KEY=your_api_key_here
    ```

    Replace `your_api_key_here` with the API key you copied from the GeoIP dashboard.

### 6. Start Using the API
- Your project is now ready to make requests to the GeoIP API using the API key.

## How to run locally

To run this project locally, follow these steps:

1. **Install dependencies**:
   ```bash
   npm install

2. **Start the development server**:
   ```bash
   npm run dev

## Author

- Frontend Mentor Account -> [@imanmaulana1](https://www.frontendmentor.io/profile/imanmaulana1)
- LinkedIn -> [/in/imanmaulana1](https://www.linkedin.com/in/imanmaulana1/)
