# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version:
Rails version: 6.1.4.1
Ruby version: ruby 2.7.4p191 (2021-07-07 revision a21a3b7d23) [x86_64-darwin20]

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# Welcome to Sabrosa! 

For this assessment, you'll be working on an API for tracking heroes and their
superpowers.

In this repo, there is a Rails application with some features built out. There
is also a fully built React frontend application, so you can test if your API is
working.

Below are the steps on how to open this app as well as the process of how I created it!

## Setup

To download the dependencies for the frontend and backend, run:

```sh
bundle install
npm install --prefix client
```

There is some starter code in the `db/seeds.rb` file so that once you've
generated the models, you'll be able to create data to test your application.

You can run your Rails API on [`localhost:3000`](http://localhost:3000) by running:
How I am running my Rails API: http://127.0.0.1:3000

```sh
rails s
```

You can run your React app on [`localhost:4000`](http://localhost:4000) by running:

```sh
npm start --prefix client
```

You are not being assessed on React, and you don't have to update any of the React
code; the frontend code is available just so that you can test out the behavior
of your API in a realistic setting.

There are also tests included which you can run using `rspec` to check your work.

Depending on your preference, you can either check your progress by:

- Running `rspec` and seeing if your code passes the tests
- Running the React application in the browser and interacting with the API via
  the frontend
- Running the Rails server and using Postman to make requests

## Models

You need to create the following relationships:

- A `User` has many `Recipe`s
- A `Recipe` has many `Step`s
- A `Recipe` has many `Ingredient`s through `RecipeIngredient`
- A `Step` belongs to a `Recipe`
- An `Ingredient` has many `Recipes`s through `RecipeIngredient`
- A `RecipeIngredient` belongs to a `Recipe` and belongs to an `Ingredient`




Start by creating the models and migrations for the following database tables:

![domain diagram](domain.png)

If you use a Rails generator to create the models, make sure to use the
`--no-test-framework` flag to avoid overwriting the test files.

Add any code needed in the model files to establish the relationships.

Then, run the migrations and seed file:

```sh
rails db:migrate db:seed
```

> If you aren't able to get the provided seed file working, you are welcome to
> generate your own seed data to test the application.



## Routes

Set up the following routes. Make sure to return JSON data in the format
specified along with the appropriate HTTP verb.

### GET /Recipes

Return JSON data in the format below:

```json
[
  { "id": 1, "name": "Kamala Khan", "dish_description": "Ms. Marvel" },
  { "id": 2, "name": "Doreen Green", "super_name": "Squirrel Girl" },
  { "id": 3, "name": "Gwen Stacy", "super_name": "Spider-Gwen" }
]
```

### GET /heroes/:id

If the `Recipe` exists, return JSON data in the format below:

```json
{
  "id": 1,
  "name": "Kamala Khan",
  "dish_description": "Ms. Marvel",
  "Step": [
    {
      "id": 1,
      "name": "super strength",
      "description": "gives the wielder super-human strengths"
    },
    {
      "id": 2,
      "name": "flight",
      "description": "gives the wielder the ability to fly through the skies at supersonic speed"
    }
  ]
}
```

If the `Recipe` does not exist, return the following JSON data, along with
the appropriate HTTP status code:

```json
{
  "error": "Recipe not found"
}
```

### GET /powers

Return JSON data in the format below:

```json
[
  {
    "id": 1,
    "name": "super strength",
    "description": "gives the wielder super-human strengths"
  },
  {
    "id": 1,
    "name": "flight",
    "description": "gives the wielder the ability to fly through the skies at supersonic speed"
  }
]
```

### GET /powers/:id

If the `Power` exists, return JSON data in the format below:

```json
{
  "id": 1,
  "name": "super strength",
  "description": "gives the wielder super-human strengths"
}
```

If the `Power` does not exist, return the following JSON data, along with
the appropriate HTTP status code:

```json
{
  "error": "Power not found"
}
```

### PATCH /powers/:id

This route should update an existing `Power`. It should accept an object with
the following properties in the body of the request:

```json
{
  "description": "Updated description"
}
```

If the `Power` exists and is updated successfully (passes validations), update
its description and return JSON data in the format below:

```json
{
  "id": 1,
  "name": "super strength",
  "description": "Updated description"
}
```

If the `Power` does not exist, return the following JSON data, along with
the appropriate HTTP status code:

```json
{
  "error": "Power not found"
}
```

If the `Power` is **not** updated successfully (does not pass validations),
return the following JSON data, along with the appropriate HTTP status code:

```json
{
  "errors": ["validation errors"]
}
```

### POST /hero_powers

This route should create a new `HeroPower` that is associated with an
existing `Power` and `Hero`. It should accept an object with the following
properties in the body of the request:

```json
{
  "strength": "Average",
  "power_id": 1,
  "hero_id": 3
}
```

If the `HeroPower` is created successfully, send back a response with the data
related to the `Hero`:

```json
{
  "id": 1,
  "name": "Kamala Khan",
  "super_name": "Ms. Marvel",
  "powers": [
    {
      "id": 1,
      "name": "super strength",
      "description": "gives the wielder super-human strengths"
    },
    {
      "id": 2,
      "name": "flight",
      "description": "gives the wielder the ability to fly through the skies at supersonic speed"
    }
  ]
}
```

If the `HeroPower` is **not** created successfully, return the following
JSON data, along with the appropriate HTTP status code:

```json
{
  "errors": ["validation errors"]
}
```
# Opening +Creatin React Within the Same Repo
Success! Created client at /Users/yaneizycastillo/Development/Code/Mod5/Practice_Sabrosa/Back-end-Pracitce-Sabrosa/Back-end-Pratice-S/back-end-Sabrosa/client
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd client
  npm start
