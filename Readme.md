# Learn Angular 8 by building a Progressive Web App (PWA) #

**Course's link: <https://www.udemy.com/course/learn-angular-8-by-building-a-progressive-web-app-pwa/>**

## Definitions
---

>`A Progressive Web App` or `PWA` is a web application that has a set of capabilities (similar to native apps) which provide an app-like experience to users. PWAs are similar to native apps but are deployed and accessible from web servers via URLs, so we don't need to go through app stores.

PWAs need to meet a set of essential requirements as bellow:

* Progressive Work for every user, regardless of browser choice, because they are built with progressive enhancement as a core tenet.

* Responsive Fit any form factor, desktop, mobile, tablet, or whatever is next.

* Connectivity independent Enhanced with service workers to work offline or on low-quality networks.

* App-like Use the app-shell model to provide app-style navigation and interactions.

* Fresh Always up-to-date thanks to the service worker update process.

* Safe Served via HTTPS to prevent snooping and ensure content has not been tampered with.

* Discoverable Are identifiable as applications thanks to W3C manifests and service worker registration scope allowing search engines to find them.

* Re-engageable Make re-engagement easy through features like push notifications.

* Installable Allow users to keep apps they find most useful on their home screen without the hassle of an app store.

* Linkable Easily share via URL and not require complex installation.


_In detail, this course will cover everything you need to build amazing PWAs - leading to a score of 100 (out of 100) in Google's PWA auditing tool Lighthouse._

## Some notes
---

1. Generate faviicon for multiple screens: realfavicongenerator.com
2. Commands:

    ```
    npm install -g @angular/cli
    ng --version
    ng help
    npm install -g firebase-tools
    npm i -g firebase-tools (Update firebase)
    firebase --version
    firebase --help
    ```

3. If you want to run the app, follow the steps listed below:

    * Open a new command prompt (on Windows), or terminal (on MacOS/Linux)

    * `cd` into the project directory (the one that contains `package.json` along with other files)

    * Run the command ```npm install``` (this will install all the dependencies listed in package.json)

    * Once done, run the command ```ng serve -o``` (this will build your app, deploy on a dev-server and launch the default browser, opening <http://localhost:4200>

4. Angular commands:
    * Create new app: ```ng new movie-browser-nathan```

        ```ng serve --port 4201 -o
        ng generate component components/home
        ng g c components/header
        ng g s services/movies
        ng g c components/movie-details
        ng add @angular/pwa
        firebase login
        ng build --prod
        firebase deploy
        ```

5. Bootstrap theme to embedded to our site:
<https://bootswatch.com/>

6. Final output:
    * Project Console: https://console.firebase.google.com/project/nathan-s-movie-browser/overview
    * Hosting URL: https://nathan-s-movie-browser.firebaseapp.com