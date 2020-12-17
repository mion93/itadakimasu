# TESTING

* Testing Deployment to Heroku: 
After adding, committing and pushing my project to GitHub I checked if the app successfully launches to Heroku.

## RESPONSIVENESS:
Testing recipe cards and responsive images in get_recipes.html and shop.html
Cards are currently responsive for the following devices:
* MOTO G4
* GALAXY S5
* PIXEL 2/2XL
* IPhone 5/SE/6/7/8/8 Plus/X
* IPad & IPad Pro
* Surface duo
* Galaxy Fold

## VIEW RECIPE

Every single recipe is displayed correctly and images look good on all screen sizes.
User needs to click "Show" in the recipe card to get redirected to view_recipe. 
Informations are well displayed as "created by", "recipe_name", "category_name", "prep_time", "ingredients", "method" 
and "image_url" that is displayed at the top of the page. 
* If the user is logged in, can see "Edit" and "Delete" button functionality in its
own recipes. 
* If the user is logged in and clicks on "Show" button in Recipe card, will be redirected to view_recipe.html, if the recipe
it's made by the same user, "Edit" and "Delete" buttons are being shown.
* If the recipe is not made by the same user, "Edit" and "Delete" buttons will not display in the recipe.


## ADD RECIPE
Testing forms for submitting the Recipe to MongoDB:
By compiling the form with a new recipe and following each step, the recipe is submitted by clicking "Submit".
The recipe is been sent to MongoDB database in Recipe collection.

## EDIT RECIPE

By clicking on "Edit" button on the single recipe, user can edit/modify its own recipe by changing the fields in the form.
After submitting the edited recipe user will be redirected to get_recipes.html.
Edited fields will show on the recipe modified by user.


## LOGIN & SIGN UP

### Registration:
Successful registration:
- Compiled form with username and password, click on the register button and being redirected
to profile page. " Registration Successful" will appear.
* If the form is compiled with username or password length < 5 and > 15 characters an error will appear.


### Login:

* By writing correct username and password to username and password fields.
Login Successful, a message will appear saying "Irasshaimase! Welcome, [username]!"
* By writing a wrong username or password to username and password fields.

## SEARCH BAR NAVIGATION
* By searching a recently added recipe from the search bar = Results show the following recipe.
* By Searching a random recipe / not spelt correctly = No result found. 
* "Search" and "cancel" button are correctly working.

## SHOP

Books and their titles are correctly displayed and responsive for all devices.
* By clicking the "Cart" icon button, users will be redirected to a new tab (target="_blank") of Amazon link.

## GO TO TOP BUTTON

* By scrolling down to the end of the page, a button will appear displaying an arrow pointing to the top.
* By clicking it, the user can be redirected to the top of the page.
