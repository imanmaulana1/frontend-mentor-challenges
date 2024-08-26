# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Calculator app solution](#frontend-mentor---calculator-app-solution)
  - [Table of contents](#table-of-contents)
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

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Localstorage
- Javascript module

### What I learned

In the process of developing this calculator project, I have gained an understanding of data attributes. These data attributes are essential elements that I have utilized for data manipulation purposes.

```html
<span class="label-slider" data-state="1">1</span>
<span class="label-slider" data-state="2">2</span>
<span class="label-slider" data-state="3">3</span>
```

```js
const currentState = parseInt(label.getAttribute('data-state'));
```

## Author

- Frontend Mentor Account -> [@imanmaulana1](https://www.frontendmentor.io/profile/imanmaulana1)
- LinkedIn -> [/in/imanmaulana1](https://www.linkedin.com/in/imanmaulana1/)
