# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Links

- Solution URL: [Click here](https://www.frontendmentor.io/solutions/ping-coming-soon-using-vanilla-css-and-javascript-z0RiOAcs5R)
- Live Site URL: [Click here](https://symphonious-quokka-b0002b.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I recently discovered an intriguing feature: it is possible to disable the browser's default validation for input elements. Additionally, JavaScript provides a test method that allows for pattern matching against user input.

```html
<form id="form-wrapper" novalidate>
```
```js
if (!emailPattern.test(email.value))
```

## Author

- Frontend Mentor Account -> [@imanmaulana1](https://www.frontendmentor.io/profile/imanmaulana1)
- LinkedIn -> [/in/imanmaulana1](https://www.linkedin.com/in/imanmaulana1/)
