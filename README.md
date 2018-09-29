# Angular 6 Full-Stack Demo

In this project I am demonstrating my current patterns and understanding in the
MEAN stack composed of Angular 6, Angular Universal, Angular Material, express,
and MongoDB.

# Back-end

In this application, an express REST API backed by MongoDB exposes a store
selling sporks (it's a spoon and fork combined!). Passport and JWT are used for
authentication against MongoDB and call authentication.

# Front-end

An Angular Material front-end consumes the API, preloading with Angular Universal for SEO and TTS. The customer registers, builds a cart, then checks out using Stripe.

In the Angular app, we use @ngrx/store and ChangeDetectionStrategy.Push for performance, immutability and stability.

ngx-translate and ngx-config provide runtime configuration and translation.

ngx-logger feeds errors and events to an API endpoint to be consumed, and angulartics2 feeds data to Google Analytics.

OutdatedBrowser is used to redirect users of old browsers.  Compodoc provides documentation.

# Pipeline

Code is deployed CI/CD as two AWS "hot" lambdas using AWS CodePipeline and CodeDeploy.
Strict linting of TypeScript, SCSS and HTML in the front-end
and ES6 in the backend, as well as unit and e2e testing, enforce quality at pre-commit and in the pipeline.

This integration stems from the AWS QuickStart:
https://github.com/aws-quickstart/quickstart-git2s3

# Instructions for Use
** Please note that this project uses yarn and that package-lock.json is in
the .gitignore **
