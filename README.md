# Unit 6 Project: What Should I Watch? App! (STARTER CODE)

Let's use our knowledge of conditionals, arrays, loops, and array methods to make an app that gives people tv show suggestions!

## How the website is supposed to work
- When a user types in a movie genre and presses "Submit!" they will see pictures of suggested tv shows appended to the page.
- The user can also  suggest shows to be added to the app by providing image link and pressing the "Suggest!" button.

## Task One (HTML):
1. Before we can make things happen on the page using JavaScript, we need to give JavaScript something to select. But because we have multiple inputs and buttons, let's give classes to some of our elements! Let's start with the inputs. There are 2. Try to give them classes based on what the placeholders say.
2. Now let's give classes to the buttons. Use the text between the tags as ideas. 
3. We want our show suggestions to appear in a div. There's one div on the page. Give it a class! 
4 (OPTIONAL). Change the h1 to call the app whatever you want! 

## (OPTIONAL) Task Two (CSS): 
1.  Make your app stand out! Change the background, text size, text color, border, whatever you want! 

## Task Three (Arrays):
1. The user needs tv show recommendations! 
Before both click handlers, create ** at least two arrays**  that contain the links to images of 2 shows you recommend in each genre.The name of the arrays should be the name of the genres you chose. 

## Task Four (Variables)
1. Now we need to save our newly-named HTML elements to variables! Let's start with our buttons. They already have classes. Remember to keep the names simple, but also don't forget that there are multiple buttons! 
2. We want our suggestions to appear in the a div. Save that to a variable too! 

## Task Five (Conditionals and Loops):
1. When the user types in a genre, the images of the recommendations should be appended to the page. Inside the first click handler (already declared for you!), we'll need to save the user's input to a variable. To do that, you'll need to use the `.value` method.`
2. Write a conditional  statement that will check if the user has typed in the first of the genres you chose. Use the `genreInput` variable to write this conditional.
2. Now within that first conditional, write a for of loop that will append each image link in the first array as an `<img>` tag to the div with the class "shows". NOTE: want to use the `.insertAdjacentHTML` method.
3. Do the same thing now for any other arrays you created! First make a conditional statement using the `genreInput` variable. Then write a for of loop that will append append each image link in the second array as an `<img>` tag to a div. NOTE: remember to use `else-if`! 

## Task Six (.Push):
1. Finally, we need to allow the user to make suggestions. In the second click handler, use .push to add the user suggestion to both of the arrays.

Then add some text to let the user know that their suggestions have been added. NOTE: You'll want to use the .append method.  

Use `console.log` on both of the arrays to test it out to see if it works!

## Next Level Features:
1. **Add a counter:** Use an operator to perform a calculation that counts and displays the number of times the user has added suggestions
2. **Video Suggestions:** Allow the user to suggest YouTube links (as well as images) and use the <video> tag to display them in an array.  
3. **Add Suggestions to Arrays** When you suggest a show using an image URL, add it to an array so that it appears when you type in a genre for suggestions.
4. **Make Your Links Clickable (SPICY!)** Make it so that when your images appear, the user can click on them and be taken to an external link (the trailer, a clip, the IMDB page)