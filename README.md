# nCov

## Run the front-end

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Run the backend

We use strapi for backend. Run `yarn develop`, strapi will be served at port 1337. You can change backend by revise the settings in proxy.config.json at config folder.

## Description for front-end
We use Angular for front-end. There are mainly five parts of front-end. The main part is "pages", it includes the mainly pages of front-end. The "services" part provides all the http services functions for pages. 

In "pages", it includes auth, demand, profile and volunteer. "auth" part includes sign-in and sign-up. The "profile" part displays the informations about user. User can update personal informations, revise settings, check demands, helps and needs.