# Custom JavaScript Cheat Sheet App

## Overview

When i started learning Javascript, I often found myself breaking my workflow to Google simple things—like where parentheses go, what methods are available, or needing a quick reminder of syntax. The cheat sheets I found online were often too cluttered with information, making it faster to check the MDN docs than use them. I also didn’t like how easy it was to copy and paste code instead of writing it myself, which is essential for learning.

I initially thought about designing a cheat sheet for myself in Figma and using it as a desktop background—just the main concepts that I needed to learn and use. But then I realized this could be useful to others, too. So, I decided to build a website where anyone can select and organize the concepts they want in a way that’s easy to access and helps them learn by writing, not just copying.

## Features

- **Customizable Canvas Size**  
  Choose the canvas dimensions that fit your needs, whether you want a compact cheat sheet or a larger, more detailed one.

- **Add and Organize Cards**  
  Select JavaScript concepts that matter to you and organize them in a way that makes the most sense for your learning process.

- **Color Customization**  
  Personalize the look of your cheat sheet by adjusting the background, text, and accent colors for each card.

- **Export as PNG**  
  Once you’ve designed your perfect cheat sheet, you can export it as a high-quality PNG for easy reference or printing.

## Built with

- **Vue 3** (using Vite)
- **HTML, CSS, JavaScript**
- **Vuetify** (for the UI components)
- **Draggable-next** (for card dragging functionality)
- **html2canvas** (to export the canvas as a PNG)
- **js-downloader** (for download functionality)

## What I Learned

This was my first project using Vue, and it was a great opportunity to dive into the framework. The most challenging part was figuring out the layout and design. I wanted to make sure that the app was flexible enough to handle any canvas size and any number of cards, all with varying dimensions. It was important to keep the layout both structured and flexible, which was tricky but rewarding.

Another challenge was figuring out how to handle cases where the user selects a canvas size larger than their screen. I needed to ensure that the entire canvas and its contents scaled down proportionally in the display. This was important because I wanted to control the text sizes in the exported image. By scaling everything down in the display without changing the actual canvas size, I could maintain the right proportions for the text while ensuring the canvas was still fully visible on smaller screens.

## Continued Development

I plan on adding more cards not only for JavaScript but also for frameworks like Vue, React, HTML, CSS, and Git. I’m also interested in improving the user experience by refining interactions and ensuring the app feels smooth and intuitive.
