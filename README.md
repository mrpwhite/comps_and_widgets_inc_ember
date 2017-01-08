#Run App Locally
## App runs with the following specs
- ember-cli: 2.10.0
- rails: 5.0.1
- ruby: 2.2.3p173
- node: 6.2.0
- bower: 1.8.0
- npm: 4.0.5

##You will need two repos to run this application, be sure to clone both locally
Ember App:
https://github.com/mrpwhite/comps_and_widgets_inc_ember

Rails App:
https://github.com/mrpwhite/comps_and_widgets_inc_rails

##Once you have the repo locally on you machine, open three terminal windows.
###In Window 1 - start rails server on localhost:3000
- cd into rails app and run the following command:
`bundle install && bin/rails server --binding 0.0.0.0`

###In Window 2 - drop, migrate and seed db
- cd into rails app and run the following command:
`rails db:drop && rails db:migrate && rails db:seed`

###In Window 3 - Start Ember server on localhost:4200
- cd into ember app and run the following command:
`npm install && bower install && ember server --proxy http://localhost:3000`
