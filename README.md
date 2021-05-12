My Portfolio Site
=================
The live site can be found at [tannorbreitigam.com](https://tannorbreitigam.com)

Goals
-----
When I started building this website, I had several goals:
- Make a website that is simple, fast, and responsive
- Be able to write the bulk of the content in Markdown, so that future content edits are quick and easy
- Learn a new technology

Technologies Used
-----------------
I recently heard about [Gatsby](https://www.gatsbyjs.com/) as a great option for frontend, static, performant sites and decided to give it a try. 
Along with Gatsby, I used a touch of [GraphQL](https://graphql.org/) to query the file system and insert `.mdx` files to insert Markdown for each page. For the actual HTML, I used React to generate HTML components with JSX. Finally, the site is hosted by Gatsby Cloud.

With these technologies in place, I was excited that I was able to meet all my goals in one elegant package. The site took about 3 1/2 days from start to deployment.

Getting Started
---------------
To set the project up:
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open the development site in your browser.

Deployment
----------
I integrated this repository with Gatsby Cloud, which will automatically check each pull request to make sure it builds successfully. With this integration, any merged pull request will be auto-deployed within minutes of merging.

Other Odds & Ends
-----------------
- I ran into a pretty interesting problem in the build process with Gatsby Cloud. The build kept failing no matter what I did, and the error messages only told me that "Generating JavaScript bundles failed at..." for each page in `src/pages`. The additional detail showed that each page was failing at the first line: `import React from 'react';`. Not helpful. Long story short, after much searching, the culprit was my use of uppercase letters in file names. Once I switched every file name to lowercase letters only, the build was successful. Lesson learned. Shoutout to [this thread](https://github.com/gatsbyjs/gatsby/issues/25605) that finally presented the solution.
- [Technologies](https://tannorbreitigam.com/technologies) icons were sourced from [Devicon](https://devicon.dev/). These were super helpful!
- I discovered [React Icons](https://react-icons.github.io/react-icons) while building this. It's a convenient package for easily importing icons from a number of places. I was only using Font Awesome and adding each icon with an `<i>` tag before, so this was a great upgrade.
- The site follows the system preference for light/dark modes. I plan to add a toggle in the future.
- It was fun to learn a little bit about how GraphQL works. I only used it to select and insert markdown files, but hope to play around with it more in the future.
