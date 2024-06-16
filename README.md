HTML,SASS project by lakshmi prasanna pinnam

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![image of landing page](./design/desktop-design.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

- make all scss partial files ready
- putting all colors in variables partial,font styles in typography partial,resets in reset partial
- write HTML for a section , write scss for that section along with moving scss code into partials as per requirement
- move to next section
- once whole page is built focus on active states like hover, focus etc..
- after active states , focus on media queries
- after media queries focus on javascript

### Built with

- Semantic HTML5 markup
- SCSS
- SCSS variables,maps,mixins
- CSS flexbox
- made responsive with media queries
- vanilla js

### What I learned

#### images

always make image as background of container because:

- by doing so we can blend image with a color
- if we apply flex-grow automatically image also will grow as it is background
- if we use normal images inside a container if we apply flex-grow to container images wont grow

```css
background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)),
  url($image);
background-size: cover;
background-repeat: no-repeat;
background-position: center top;
```

#### pseudo-elements

placing content of ::after which is positioned absolute , exactly in middle

```css
left: 50%;
transform: translateX(-50%);
```

### background-size options

- cover :

  - Scales image to smallest size so that width and height can completely cover the content area.
  - This result in the image being cropped, but ensures no empty space around the edges.

- contain :
  - Scales image to largest size so tat width and height fit inside content area.
  - This option ensures that the entire image is visible without cropping.
- auto :
  - Keeps the original size of the image. This option does not scale the image at all

```css
background-size: 150px; /* width only, height is auto */
background-size: 50% 50%; /* width height */
```

###

vanillajs

```js
querySelector;
querySelectorAll;
addEventListener;
toggle;
```
