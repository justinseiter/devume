#Devume

> Devume is the hackable JSON resume. Fork it, tweak it, deploy it!

Devume ships with [Webpack](https://webpack.github.io/) for code bundling, [Handlebars](http://handlebarsjs.com/) for templating, and a JSON file you can update with your own resume data. Together they provide a very lightweight system for quickly creating a resume you can host at your own domain.

[See Example Devume](http://resume.justinseiter.com/)

##Dependencies
NodeJS 4.x

##Installation & Getting Started
 1. Fork this repo.
 2. Clone your copy of the repo: `git clone ...`
 3. CD into the project folder: `cd devume`
 4. Run `npm install`
 5. Rename `resume-example.json` to `resume.json`
 6. Rename `config-example.json` to `config.json`
 6. Run `npm start`
 7. Visit [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/)

##Local Development
Run `npm start`, make changes, save, and Webpack will hot-reload. :)

##Configuration

 - **Config.json** - This file is located in `app/config.json`. Here you can update the title tag for your resume as well as set the theme.
 - **Resume** - The `resume-example.json` file is loosely based on the schema from [jsonresume.org](http://jsonresume.org).  Rename it `resume.json` and add your info.
 - **Templates** - There are 2 templates included, "textual" and "boxed" (default). 
   - To switch to a different theme update of `app/config.json` with the name of the template.
   - If you'd like to **edit** a theme or **create your own**, duplicate one of them and give it a name. Then update `app/config.json` with the new theme name. **Duplication will ensure if you pull from upstream you won't have conflicts**. 
 - **Styles** - All styling should be performed in the [Stylus](http://stylus-lang.com/) file `index.styl` inside of the template you duplicated. [Normalize.css](https://necolas.github.io/normalize.css/) and [skeleton.css](http://getskeleton.com) are imported for base browser reset and some light default stylings respectively. Skeleton is primarily utilized for typography and layout.

##Deployment With [Surge.sh](http://surge.sh)

> Simple, single-command web publishing. Publish HTML, CSS, and JS for free, without leaving the command line.

The npm package `surge` has already been added as a development dependency. Surge does not have any type of account online. Everything is handled via the command line. :)

 1. To prepare your build execute: `npm run production` This will create a `dist` directory.
 2. CD into the `dist` directory and execute: `surge` and follow the prompts.

If you'd like to deploy to a specific domain add a file called `CNAME` to the `dist` directory with the domain you'd like to point to, ie `resume.mydomain.com`. Then add a CNAME record with your registrar. Full instructions on custom domains with Surge here: [https://surge.sh/help/adding-a-custom-domain](https://surge.sh/help/adding-a-custom-domain)

##Issues
If you have any issues whatsoever please submit them here: [https://github.com/justinseiter/devume/issues](https://github.com/justinseiter/devume/issues)


----------


> Written with [StackEdit](https://stackedit.io/).