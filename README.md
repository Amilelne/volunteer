# nCov

## Run the front-end

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Run the backend

We use strapi for backend. First you should install strapi, just go to strapi folder, and run `yarn`, it will install strapi for you. We use MongoDB, so you should run an instance of mongoDB at port 6666, you can change the port at `strapi/config/database.js`. Then run `yarn develop`, strapi will be served at port 1337. You can change backend by revise the settings in proxy.config.json at config folder.

## Description for front-end
We use Angular for front-end. There are mainly five parts of front-end. The main part is "pages", it includes the mainly pages of front-end. The "services" part provides all the http services functions for pages. 

In "pages", it includes auth, demand, profile and volunteer. "auth" part includes sign-in and sign-up. The "profile" part displays the informations about user. User can update personal informations, revise settings, check demands, helps and needs.The "demand" part shows users' demands and volunteer can check the details of the demand, then they can accept users' demands. The "volunteer" part shows volunteer group's information and their needs.