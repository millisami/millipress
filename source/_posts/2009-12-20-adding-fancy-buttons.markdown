---
title: Using fancy-buttons with Octopress!
---

**Compass** has really pushed the way we write CSS. It makes me feel like programming in CSS. [Facny-Buttons](http://github.com/imathis/fancy-buttons/) just adds a mixin named **+fancy-button**.
Explore more at [Fancy Buttons Are Here!](http://brandonmathis.com/blog/2009/11/19/fancy-buttons-are-here/)

Just going with the default:

    button
        +fancy-button

#####Examples:

    <button>Click me</button>
    <a class="button" href="#">Click me</a>

<button>Click me</button> <a class="button" href="#">Click me</a>

Using the variable `!button` with `darken(#57b42c, 8)` function from `compass-colors`:

    !button = darken(#57b42c, 8)
    a.button, button
        +fancy-button(!button, 25px, 20px, 4px)

Using the `+fancy-button-structure(25px, 20px, 4px)` structure and colors:

    !button = darken(#57b42c, 8)
    !hover = mix(red, yellow)
    !active = darken(!hover, 12)
    a.button, button
        +fancy-button-structure(25px, 20px, 4px)
        +fancy-button-colors(!button, !hover, !active)

Using the default structure but with customized colors:

    !button = darken(#57b42c, 8)
    !hover = mix(red, yellow)
    !active = darken(!hover, 12)
    a.button, button
        +fancy-button-structure
        +fancy-button-colors(!button, !hover, !active)

For grained details, [follow the link](http://brandonmathis.com/projects/fancy-buttons/).
