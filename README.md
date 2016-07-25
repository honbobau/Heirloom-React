# Heirloom

'A platform where users can browse, add, and share recipes with a customized network of other users.'

https://heirloom-web.herokuapp.com/

## Front-end built on
* React.js/ES6
* Webpack
* Bulma

## To start server locally
* Install modules
$> npm install

* Run postgres
$> pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start

* Running
$> npm run start

## AWS Bucket URL
https://s3-us-west-2.amazonaws.com/heirloom-toronto/ + publicURL

## eslint
* Run linter
./node_modules/.bin/eslint --ext .js --ext .jsx src

* Run linter and fix errors 
./node_modules/.bin/eslint --ext .js --ext .jsx src --fix
