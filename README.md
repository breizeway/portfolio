# My Personal Site

The live site is at [tannor.net](https://tannor.net), but
[tannorbreitigam.com](https://tannorbreitigam.com) works too (maybe? the redirect is not working yet).

## About

I originally built this site fresh out of App Academy and thought it would be cool to write each page (I had my personal info broken up into like 5 pages for some reason, lol) on the site with markdown. I much less enamoured with that idea now in general after getting some professional development under my belt. However, upon revisiting this site in 2023 to update and simplify it, I'm still actually quite into it for a simple personal website that is mostly text. It makes changing the copy extremely simple, allowing me to just open github and modify the home page markdown directly on `main`, if needed.

## Technologies Used

- [Gatsby](https://www.gatsbyjs.com/) as an option for a lightweight and performant react site
- a touch of [GraphQL](https://graphql.org/) to query paths for each page
- hosted on Gatsby Cloud

## Dev Instructions

To set the project up:

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open the development site in your browser at [localhost:8000](http://localhost:8000/)

### Deployment

Builds are automated with Gatsby Cloud, which checks pull requests to ensure a successful build. Merged pull requests to `main` to deploy to the production site.
