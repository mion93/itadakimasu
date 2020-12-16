# ITADAKIMASU - SHARE YOUR JAPANESE RECIPE



## UX

### GOAL 

The purpose of this project is to create a website where people can share and explore Japanese recipes.

Japanese food, known as the healthiest food in the World, is really popular especially with Millenials and nowadays people like to experiement new food cultures from the world. 

This website can be used not only by beginners who wants to be inspired and discover this food culture but also by people who have experience in cooking Japanese food and want to share their recipes.

### DESIGN

#### COLORS
![Palette](/static/images/palette1.png)


#### LOGO

* ITADAKIMASU in Japanese means 'I humbly receive' or can be interpreted by "Let's enjoy our food'. This word shows gratefulness for the meal by Japanese culture.
* The Red Dot represent the Japanese flag, so I decided to use it to have a connection with Japan.
![JAPAN FLAG](/static/images/Japan-flag-wallpaper-12.gif)
![ITADAKIMASU](/static/images/logo.PNG)

#### FONT

* For this Project I used [Montserrat](https://fonts.google.com/specimen/Montserrat) and [Roboto](https://fonts.google.com/specimen/Roboto). 

### WIREFRAMES 


## FEATURES 


## TECHNOLOGIES USED 

### LANGUAGES 
* [HTML](https://en.wikipedia.org/wiki/HTML5)
* [CSS](https://en.wikipedia.org/wiki/CSS)
* [JAVASCRIPT](https://en.wikipedia.org/wiki/JavaScript)
* [PYTHON](https://en.wikipedia.org/wiki/Python_(programming_language))

### FRAMEWORKS - DATABASE - LIBRARIES

* [MATERIALIZECSS](http://materializecss.com/) 
  For responsiveness and styling the website
* [JQUERY](https://en.wikipedia.org/wiki/JQuery)
 Javascript Library 
* [FLASK](https://en.wikipedia.org/wiki/Flask_(web_framework))
 Python Web Framework
* [WERKZEUG](https://werkzeug.palletsprojects.com/en/1.0.x/)
 Used with Flask for password hashing and autentification
* [MONGODB](https://en.wikipedia.org/wiki/MongoDB)
 Database used for Itadakimasu Recipes
* [HEROKU](https://en.wikipedia.org/wiki/Heroku)
App for project deployment
* [GITHUB](https://en.wikipedia.org/wiki/GitHub)
* [GOOGLE-FONTS](https://fonts.google.com/)
 To import Montserrat and Roboto 
* [FONT-AWESOME](https://fontawesome.com/)
 To import icons for UX purposes
* [FAVICON](http://faviconer.com/)
To create website icon
* [GIT](https://en.wikipedia.org/wiki/Git)
 Version control and adding, committing and pushing to GitHub from GitPod

## TESTING 

* HTML

* CSS
W3CValidator CSS I recieved no errors with my CSS file.

* Javascript
JShint - No errors.

* Python
Pep8 - 

## DEPLOYMENT 

### Heroku deployment

Using automatic deployment from GITPOD to HEROKU:
- Create Procfile using commands:
 $ pip3 freeze --local > requirements.txt

 $ echo web: python app.py > Procfile
- Create a new app in Heroku platform, enter a new app name and then create app by choosing also the region name.
- Select GITHUB as deployment method and connect GITHUB account to Heroku.
- Go to Settings and find Config Vars, then in Reveal Config Var enter the env.py variables:
 1. IP
 2. PORT
 3. SECRET_KEY
 4. MONGO_URI
 5. MONGO_DBNAME
- Push requirements.txt and Procfile to repository.
- On Deploy App section in Heroku click on "Enable Automatic Deploys" and then "Deploy Branch", once done a message will show: "Your app was successfully deployed"
- View deployed project by clicking on "View" to launch the app.






## CREDITS

* MATERIALIZE FRAMEWORK
 Navbar, buttons, parallax, sliders, cards, forms, responsiveness)

* Stack Overflow
 Used for fixing responsiveness bugs.

* Unspleash
Used for no copyright images

* Amazon
 Used for images and URL of the books

* Articles:
[Culture Trip](https://theculturetrip.com/asia/japan/articles/the-10-best-traditional-japanese-dishes/)
[BBC FOOD](https://www.bbc.com/future/article/20200626-should-we-eat-more-like-the-japanese)


## Acknowledgments

* My Code Institute Mentor Gerard Mcbride for support and help.
* Slack Community for the support.
* Code Institute Tutors for help.