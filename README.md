HelloFresh Dev Team - Frontend Developer Test
=============================================

The goal of this test is to assert your coding, UI, HTML and CSS skills (to some degree).

Feel more than free to add any particular technique or algorithm at any point, which you think might enrich the overall quality of the end result. We expect you to be able to solve this test in a 2-4 hour time span (it is okay to take longer, we really want to be able to assess all your skills!).

Instructions
------------

1. Clone this repo.
2. Create a new `dev` branch, or create a fork of this repo.
3. Write your code, in various commits so we can see your development timeline.
4. When finished create a Pull Request with set-up instructions for us and explaining your solution.
5. Reply to the thread your having with our HR department telling us that we may start reviewing your code.

Requirements
------------

- You *MUST* use HTML5, CSS3 and a JS framework or Vanilla JS
- Your code *MUST* use english comments and/or names (don't over-comment your test, we know how to read code)
- You *SHOULD NOT* use jQuery or Twitter's Bootstrap
- You *SHOULD* use a CSS preprocessor or postprocessor
- You *SHOULD* use some kind of server to serve your code, something like [http-server](https://github.com/indexzero/http-server) would do
- You *MUST* automate all the compilation processes with a task running utility (eg. Gulp) preferred is a self-written solution

Exercise
--------

In this test we will build a recipe review area.

It will contain two pages:

- [Login page](#login-page)
- [Recipe review page](#recipe-review-page)

#### Login page

Implement a login page with a form to login, it doesn't have to actually log you in or do any checks, but things like e-mail validation are appreciated!

#### Recipe review page

This will show all the recipes that are attached.

- All the recipes will be displayed here
- The recipes have to be shown with all the data in the JSON displayed in a user-friendly way

If the user is logged in:

- Each recipe can favorited or unfavorited
- Each recipe can be rated

Evaluation Criteria
-------------------

- The app must run
- Your app is lean and mean (small files that make the page look good)
- You implemented a proper grid
- Your app is responsive
- Your app is well structured

Bonus points

- You wrote unit tests for your JavaScript
- Your application is a SPA
- You wrote server side code instead of using a utility application like `http-server`
- You implement actual endpoints for the requests to the server

Good luck, and have fun!
