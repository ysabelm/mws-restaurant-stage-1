# Restaurant review app - stage 1
Project of Udacity FEND program - Front-end applications

## Project Overview

You start with a static design that lacks accessibility and you'll convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

The code has a lot of issues:
- it’s barely usable on a desktop browser, much less a mobile device,
- it also doesn’t include any standard accessibility features,
- and it doesn’t work offline at all.

Therfore the tasks are about updating the code to resolve these issues while still maintaining the included functionality. 

### Requirements
**Make the provided site fully responsive:** all of the page elements should be usable and visible in any viewport, including desktop, tablet, and mobile displays. Images shouldn't overlap, and page elements should wrap when the viewport is too small to display them side by side.

**Make the site accessible:** alt attributes should be present and descriptive for images. Screen-reader-only attributes when appropriate are used adding useful supplementary text. Adding semantic markup where possible, and aria attributes when semantic markup is not feasible will be a good practice.

**Cache the static site for offline use:** using Cache API and a ServiceWorker, the data for the website will be cached so that any page (including images) that has been visited is accessible offline.

### What do I do from here?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. 

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8787` (or some other port, if port 8787 is already in use.) For Python 3.x, you can use `python3 -m http.server 8787`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8787`, and look around for a bit to see what the current experience looks like.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use. 

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.