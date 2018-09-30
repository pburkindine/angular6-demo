# Angular 6 Full-Stack Demo

In this project I am demonstrating my current patterns and understanding in the
MEAN stack composed of Angular 6, Angular Material, Bootstrap 4, FontAwesome5, express,
and MongoDB.

# Backend

In this application, an express REST API backed by MongoDB exposes a store
selling sporks (it's a spoon and fork combined!).
 
Passport and JWT are used for authentication against MongoDB and call authentication.

TODO is JWT blacklisting and logout since Redis is not in the stack

# Frontend

An Angular Material front-end consumes the API.  The customer registers, builds a cart, then checks out using Stripe.

In the Angular app, we use @ngrx/store and ChangeDetectionStrategy.Push for performance, immutability and stability.

ngx-translate and ngx-config provide runtime configuration and translation.

ngx-logger feeds errors and events to an API endpoint where winston feeds them to the Elastic Beanstalk logs

angulartics2 feeds data to Google Analytics.

OutdatedBrowser is used to redirect users of old browsers.  Compodoc provides documentation.

# Pipeline

Code is deployed CI/CD using AWS CodePipline/CodeBuild.

The backend is deployed to an EC2 using Elastic Beanstalk, and the frontend
is exposed in an S3 bucket.

Strict linting of TypeScript, SCSS, JSON and HTML on the front-end
and ES6 in the backend enforce quality measures at pre-commit and in the pipeline. no-any, max-file-line-count, and
immutability are enforced.
  
Unit test coverage is around 98% lines.

NOTE: There is no effort made at this time to implement a config.json builder,
runtime config.json is committed to the repository

NOTE: e2e tests are disabled because of issues getting ChromeDriver to run in CI

# Instructions for Use
** Please note that this project uses yarn and that package-lock.json is in
the .gitignore **
