# Koala Names

A simple, proof-of-concept project for a friend's potential business. The purpose of the app is to allow foreigners to choose a "proper" english name that contains no negative connotations or potential difficulties.

The app asks the user to select the baby's gender, 5 characteristics that the user would like the baby to have. The app hard-codes 3 name results. In theory, an algorithm would match the best 3 names based on the gender and characteristics chosen. This app "fakes" the time it would take the algorithm to run.

## Installation

- `npm install`
- `npm run dev` to run dev server

## Why You Might Care About This Project

This is a simple project that showcase GSAP animation within a modern react application. Animations include custom cursor and a relatively complex koala svg.

The koala animation uses morphSVG and drawSVG GSAP plugins which require a paid license. If you want to play with this without a license, you can do so by forking [this codepen](https://codepen.io/deduced/pen/WNOojpB) which includes the koala animation as well as a custom text animation not included in this app.

The sketch file source for the koala svg is included in this repository in the `/assets` folder in root.

## Notes on Stack

- Simple react app with props drilling.
- parceljs builder for simplicity

Animations generated using GSAP (Greensock):

- cursor scales when mouse enters the koala svg
- clicking on koala initiates the wave loop animation
  -cursor is customized and includes a trailing magnetic effect

Other Animations

- Lottie animation embedded during the "Analyzer' phase
