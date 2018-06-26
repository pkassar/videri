```npm start``` bundle and launch app then listen on port 3000


To build the VIDERI browsing application I used react and it's top down directional flow in order to keep track of the current view

I created a JSON object inside the Data.js file and exported it for my whole app to use and mimick how data would be requested and passed from a back-end entity

You currently have to click twice to move from folder to file, and once to zoom on files.

There are 5 React element in the src folder.

Icons used as well as associated CSS files are in the assets folder.

I used a library for being able to zoom in on files, I could have easily implemented one for videos given the data.

I would have liked to implement a click select function to change the border color and have a better user experience.

I would have liked to implement the sorting buttons to change the order of the elements displaying on the page. I think a simple JS function sort would have done the trick

Finally the search bar for files could have been added with a re-render of elements displaying the ones matching the search terms.