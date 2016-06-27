HelloFresh Dev Team - Frontend Developer Test
=============================================

The goal of this test is to assert your coding, UI, HTML and CSS skills (to some degree).

Feel more than free to add any particular technique or algorithm at any point, which you think might enrich the overall quality of the end result. We expect you to be able to solve this test in a 2-4 hour time span (it is okay to take longer, we really want to be able to assess all your skills!).

Instructions
------------

- Clone this repo.
- Create a new `dev` branch.
- Do a Pull Request from `dev` to `master`, more on that right below.
- Reply to the thread your having with our HR department telling us we can start reviewing your code.

When you're finished, please do a pull request to `master` and make sure to write about your approach in the description. One or more of our engineers will then perform a code review. We will ask questions which we expect you to be able to answer. Code review is an important part of our process; this gives you as well as us a better understanding of how working together might be like.

Requirements
------------

- You MUST use HTML5, CSS3 and Vanilla (plain) JavaScript or AngularJS (preferred)
- You MUST name all labels, variable names, etc., in english.
- You SHOULD document your code. Don't explain code itself, but explain why this is a good method!
- You CANNOT use other external libraries (JS or CSS) like jQuery, Twitter's Bootstrap, etc. other than AngularJS (Angular modules are also okay!)
- You MUST use a CSS preprocessor language like SASS or LESS.
- You CAN write server side code. If you feel skilled enough with writing an Express.js back-end or something Isomorphic/Universal even. We would appreciate to review that code as well.
- You SHOULD write your own test suite (eg. Jasmine/QUnit) for a particular component that you’ve written.
- You MUST automate all these processes with a task running utility (eg. Gulp) preferred is a self-written solution.

Exercise
--------

Build an html page in which:

- The main content is loaded dynamically from the JSON file attached.
- It has a login form for signing in with a valid email and a password.
- Each recipe can be marked as favorite/unfavorite
- Each recipe can be rated/unrated
- Of course since there's no server side component, the POST request for this form will fail. This is expected. However, client side validation before submiting the form MUST be implemented.
- You MUST implement a responsive design, at least for mobile and desktop viewports

Good luck, and have fun!
