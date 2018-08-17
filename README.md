# Social Tables Apprentice Challenge

Thanks for your interest in the Social Tables Apprentice Program!

[Social Tables](https://www.socialtables.com/) engineering is looking for [apprentices](https://jobs.lever.co/socialtables/f2555c1a-0657-4b58-b5fd-1cab2030d4ef)! The position is a great opportunity to learn and grow on a fantastic team working with fun, exciting technologies. Many of our excellent engineering staff were once apprentices.

Your task, should you choose to accept it, is to build out some features and styling for a React/GraphQL venue listing web app. Women, LGBTQ+ and people of colour are especially encouraged to apply!

- **Submissions are due by 11:59pm on Sunday, August 26th.**

For applicants who successfully complete this code challenge, there will be a phone screen and potential on-site interview. Our goal is for apprentices to begin onboarding three weeks after the deadline. There is some flexibility on start date to accommodate your schedule.


## The Challenge
This challenge is based on the [Social Tables Group Distribution Platform](http://search.socialtables.com), our search engine that allows event planners and their clients to discover venues in which to hold their events.

We have laid out the various parts of this challenge to give a high level tour of some of the tools we use here at Social Tables: React for front end components, GraphQL queries and mutations on the client and server (using Apollo for React and NodeJS), and CSS.

Given the starter code, complete as many of the features listed below as you can. Some of the features are already partially applied, and we've noted where you shouldn't need to make any changes. The features are all independent of each other and can be completed in any order. You'll also need to style the app so it looks as close to the images and gifs as possible. **Clean, maintainable, and organized (S)CSS is an important part of your submission!**


## To Start
- clone or download this repo
- run `nvm use` to make sure you're using the right version of node
- run `npm install`
- run `npm run server` in one console to start the server on port 3001
- run `npm start` in another console to start the react app on port 3000

You can access the app at http://localhost:3000  
Additionally, you can find the in-browser GraphQL IDE at http://localhost:3001/graphiql  

The page will reload if you make changes in /src.  
The server will restart if you make changes in /server.  
Without any changes to the starter code, the app should look like [this](#starter))


## The Features
### Header, Navigation & Overview ([image](#overview))
- [ ] **Language Dropdown -** when toggled, changes the language of the description in the Overview ([see gif](#language-dropdown))
- [ ] **Navigation Tabs -** when clicked, changes the content of the page as described by its label (no need to do routing, [see gif](#navigation-tabs))
- [ ] **Overview Info Box -** includes the full address of the venue

### Hero
- [ ] **Title Overlay -** includes the partial location of the venue
- [ ] **Arrows -** when clicked, rotates through the listing's images ([see gif](#hero-images))

### Reviews ([image](#reviews))
- [ ] **Header -** displays average rating of all reviews as multiple stars (rounded is fine)
- [ ] **Review -** includes author initials, formatted date, and displays rating as multiple stars
- [ ] **Rate Your Experience -** displays multiple stars equal to the highest possible rating (5) that when clicked, set the rating of the new review
- [ ] **Add Review -** when clicked, adds the user-inputted review to the top of the list without reloading the page ([see gif](#add-review))
	* This feature appears to require the **Rate Your Experience** stars
	* If you want to complete the **Add Review** functionality without it, hard code the value or implement the selection with something else (perhaps a number input)
- [ ] **Trash Icon -** when clicked, deletes the review ([see gif](#delete-review))


## How to Submit
Please submit a compressed archive (.zip, .tar) as an attachment to the [job posting](https://jobs.lever.co/socialtables/f2555c1a-0657-4b58-b5fd-1cab2030d4ef) with the following:

* `YourInitials-readme.{md, txt}` containing:
	* Instructions for running your code
	* Any notes you wish to include
	* **Brief answers to the following questions**:
		1. What aspect of your submission are you most proud of, and why?
		1. What would you work on if you had more time? What features might you add to this type of product?
		1. Of all the resources (blog posts, tutorials, videos, mentors etc.) you referenced, what was most helpful for you?
* `YourInitials-code` folder with your code.
	* Submitting your `node-modules` folder isn't necessary, because we can get it by running `npm install`
	* You should submit any files you found necessary to change and enough support and explanation so we can reproduce your results. In any case, include all the information in `YourInitials-readme.{md, txt}`.
* `YourInitials-resume.pdf` containing your resume.


## FAQ
* **Do I need to complete the entire challenge to submit? I'm not sure if my submission is good enough**  
	No, we are happy to look at any submissions, seriously! You have nothing to lose by submitting -- just document where you ended up in your README.md.

* **What resources should I use?**  
	You are encouraged to use any resources you can find on the internet. A list of suggested references is included below.

* **Do I need React experience to apply?**  
	No! Many of our engineers had not worked with React prior to starting at Social Tables.

* **What about GraphQL? I've never heard of it...**  
	GraphQL is relatively new and we do not expect applicants to have been exposed to it before. We are confident that the GraphQL tasks in this challenge should be a tractable learning experience.

* **Does it benefit me to submit my application early?**  
	No. While we highly encourage you to submit before the deadline (end of day Sunday, August 26), all applications will all be evaluated after that point, not on a rolling basis.

* **Can I post my solution to the Internet/GitHub?**  
	We ask that you don't. It makes it much harder to evaluate submissions when a completed solution is available for review.

* **Does that mean I should not fork this repo and push my changes or solution to my fork or any other public GitHub page?**  
	Yes.

* **Can I copy someone else's submission, cite it, and submit?**  
	No.

* **I see a typo.**  
	Submit a pull request!

* **Do I need to support IE8? WebTV? Mosaic?**  
	No. We will evaluate submissions in Google Chrome.

* **I still have a question.**  
	Submit a Github issue.

## A Few Helpful Resources
* [Introduction to commonly used ES6 features](https://zellwk.com/blog/es6/)
* [Official React Docs](https://facebook.github.io/react/docs/hello-world.html)
* [Official GraphQL Docs](https://graphql.org/learn/)
* [Apollo Client Developer Tools](https://blog.apollographql.com/apollo-client-developer-tools-ff89181ebcf) - There is also a thing called GraphiQL. It is great! You should use it.
* [React Apollo (apollo client)](https://www.apollographql.com/docs/react/essentials/queries.html)
* [Official Apollo GraphQL Docs](https://www.apollographql.com/)


## Media
### Overview
![overview](/public/img/overview.png)
### Reviews
![reviews](/public/img/reviews.png)
### Language Dropdown
![language](/public/img/language.gif)
### Navigation Tabs
![navigation](/public/img/navigation.gif)
### Hero Images
![hero](/public/img/hero.gif)
### Add Review
![add review](/public/img/add-review.gif)
### Delete Review
![delete review](/public/img/delete-review.gif)
### Starter
![starter](/public/img/starter.gif)
