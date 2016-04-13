#Devume
Devume is the hackable JSON resume. Fork it, tweak it, deploy it!

##Dependencies
NodeJS 4.x

##Installation
 1. Fork this repo.
 2. Clone your copy of the repo.
 3. CD to the root directory.
 4. Run `npm install`

##Local Development
Run `npm start`

##Configuration
**Resume** - The `resume.json` file is loosely based on the schema from [jsonresume.org](http://jsonresume.org).  

**Layout** - Each section of the resume is built out in the `partials` directory. The `template.handlebars` file determines which partials are loaded as well as the order they are loaded into the view.

##Deployment With Surge.sh

 1. Install surge globally: `npm install --global surge`
 2. To prepare your build execute: `npm run production` This will create a `dist` directory.
 3. CD into the `dist` directory and execute: `surge` and follow the prompts

If you'd like to deploy to a specific domain add a file called `CNAME` to the `dist` directory with the domain you'd like to point to, ie `resume.mydomain.com`. Then add a CNAME record with your registrar. Full instructions on custom domains with Surge here: [https://surge.sh/help/adding-a-custom-domain](https://surge.sh/help/adding-a-custom-domain)

##Issues
If you have any issues whatsoever please submit them here: [https://github.com/justinseiter/devume/issues](https://github.com/justinseiter/devume/issues)


> Written with [StackEdit](https://stackedit.io/).