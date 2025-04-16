Root level directory :- react-project-one

Node modules :- required modules for react project are installed

Npm installs all the needed packages in the project 

public folder - assets / static files needed in the project ex. favicon icon. Things that are not built, which are directly handed to the webserver as it is. 

Source folder - Main code reside under source folder. Whatever components you write down. 
Assests folder inside source folder - fonts, images, extra CSS files.
Any such asset that is used inside js or ts

index.html file is rendered on browser's view port. Only the root id's div tag is rendered. 

First of all, index.html file is rendered where it finds root element inside root id's div, and main.js file. The JS file renders app component for root id's div

When you create project using create-react-app, you get index.jsx file instead of main.jsx file.

package.json - versions of packages used in the project are all listed here. All dependancies are listed here. 

readme file - how to run project and all info about project that you want to share. 



npm run dev
    |
index.html (index.css file)
    |
div (root)
    |
main.jsx (index.jsx)
    |
App.jsx is rendered (App.css)
    |
JSX is rendered

What is JSX? 
Its html + js code
Javascript xml is such an extension or such a code that appears to look like HTML but is not actually HTML. 

JSX -> converted to -> react code -> converted to -> html -> browser renders on UI 

Writing code in JSX is comparitively easier. 

How to create components 
src -> components folder -> component name (Navbar.jsx)

