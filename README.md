
### Technologies used in the project: 

React - It is a test for React Developer role that's why I decided to use React. I considered between GatsbyJs and React but it is a little different with using routing in projects. Gatsby has better optimization for images and it is better for SEO, but like I said I wrote the project in React because I want to show I know React Route DOM.

React Router DOM - I used this to change the URL path and change the view between sites. (All buttons are clickable)

Styled Components - It is a library for creating CSS-in-JS. I thought to use SASS(SCSS) here the advantage of styled-components is that it generates separate class names for each tag and has the same tools that can be used in SASS.

That's all. I didn't want to use more packages because I didn't see any advantages but I wanted the project to be light


## URL:  https://ludlow-university-test.netlify.app/


## What could I have done better
1. Create a component for Button and implement this in every place where I want to. 
2. Create a component for the Card section and use path something like "/card/:id" for rendering view for clubs, accommodations etc. 
3. Two images could be created for mobile and desktop sizes. For better User Experience. 
>>>>>>> main


## Structure Ludlow University Test: 
```
│   App.js
│   index.js
│   reportWebVitals.js
│   Routes.jsx
│
├───assets
│   ├───GlobalStyles
│   │       breakpoints.js
│   │       globalStyles.js
│   │       index.css
│   │       index.js
│   │       respondTo.js
│   │
│   └───images
│       │   backgroundLogo.png
│       │   banner-image.png
│       │   logo.png
│       │   logoColoured.png
│       │   logoIcon.png
│       │   person.png
│       │
│       ├───cards
│       │       accommodation.png
│       │       activities.png
│       │       bike.png
│       │       girl.png
│       │       support.png
│       │
│       └───events
│               game.png
│               rock.png
│               study.png
│
├───components
│   ├───Footer
│   │   │   index.jsx
│   │   │   styles.js
│   │   │
│   │   ├───SocialMedia
│   │   │       index.jsx
│   │   │       styles.js
│   │   │
│   │   └───Twett
│   │           index.jsx
│   │           styles.js
│   │
│   ├───MobileNav
│   │   │   index.jsx
│   │   │   styles.js
│   │   │
│   │   └───NavList
│   │           index.jsx
│   │           styles.js
│   │
│   └───Nav
│       │   index.jsx
│       │   styles.js
│       │
│       └───NavList
│               index.jsx
│               styles.js
│
└───pages
    ├───About
    │       index.jsx
    │
    ├───BookOpenDay
    │       index.jsx
    │
    ├───Events
    │       index.jsx
    │
    ├───Home
    │   │   index.jsx
    │   │   styles.js
    │   │
    │   ├───Banner
    │   │       index.jsx
    │   │       styles.js
    │   │
    │   ├───Cards
    │   │   │   index.jsx
    │   │   │   styles.js
    │   │   │
    │   │   ├───IrregularCards
    │   │   │       index.jsx
    │   │   │       styles.js
    │   │   │
    │   │   └───RegularCards
    │   │           index.jsx
    │   │           styles.js
    │   │
    │   ├───Header
    │   │   │   index.jsx
    │   │   │   styles.js
    │   │   │
    │   │   ├───Image
    │   │   │       index.jsx
    │   │   │       styles.js
    │   │   │
    │   │   └───PersonSection
    │   │           index.jsx
    │   │           styles.js
    │   │
    │   └───UpcomingEvents
    │       │   index.jsx
    │       │   styles.js
    │       │
    │       └───EventCard
    │               index.jsx
    │               styles.js
    │
    ├───Research
    │       index.jsx
    │
    ├───Stories
    │       index.jsx
    │
    └───Study
            index.jsx
```
