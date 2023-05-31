// Declare your genre arrays here
let comedy = ["https://m.media-amazon.com/images/M/MV5BMzkyMjU1ZjMtMDJlMS00M2YzLWJhZDQtYjFjZTUyMzI2MDViXkEyXkFqcGdeQXVyMzQyMDgzOTU@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BNDE2ODVmNGMtOGI3Zi00ODNjLTg5ZmUtNzAxNjQ4M2FjNzlkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg", "https://occ-0-395-33.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVRtGLIYuQeO3rZfPPOlo693IYFTeUx3ysQE-1aGB7LF-_ImvnjgKGh4IP5R1BwZszZ2hef_sxFl8mEPtMXOLcS2_stfQ8nGdbMe_eRwLtyAkb9OgozIK52Hnzd8UPfRF0dVnQ.jpg?r=b74", "https://ntvb.tmsimg.com/assets/p21396488_v_h8_aa.jpg?w=960&h=540"];

let horror = ["https://m.media-amazon.com/images/M/MV5BMmZlOGZkMjMtZDc4Ny00ZTQ1LWFmYTQtOThlY2JjYjg1NGQyXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BYWQwYjNiM2ItMTcyZS00ZTNmLTgwNzQtMTgwNzU5ODgxMTc3XkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg", "https://occ-0-34-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdhLg_8KM4whOtB1HSO8WOUgm9BmRjV_Gw0LDXXMSwi9TJi30ZbHMQt0AFxilmfVZSBnHaIyNoIawxhihLOtpI4M1_tRSocmb9pOx3b5hfeFbRc8PPjc_FTq4kL3xWgiJGdo8g.jpg?r=32c", "https://m.media-amazon.com/images/M/MV5BNWZhYzk2NjktYTQ0OS00YjA2LTg0ODItN2E4OWIyNzczZDRkXkEyXkFqcGdeQXVyMTEzMjQ4NzEw._V1_.jpg"];

let romance = ["https://fullcirclecinema.com/wp-content/uploads/2019/03/Five-Feet-Apart-Pic-960x640.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1", "https://m.media-amazon.com/images/M/MV5BMDQwZjg1MTQtNzQ0OS00MDQyLWJjM2QtM2Q5MTQxN2QxNjNhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BNTgzZjM5MWQtN2NhMy00NTFiLTliNGUtYTFiZjY3MWYwYmZjXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BNzI4ZTAwNzEtNTk5YS00ZWJmLWI1ODMtOTU4MTM5MzQ4OWM0XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg"];

let comedyLinks = ["https://www.youtube.com/watch?v=LM2F56uK0fs", "https://www.youtube.com/watch?reload=9&v=urqy8DrcGBs", "https://www.youtube.com/watch?v=HCtDkpe89aY", "https://www.youtube.com/watch?v=IE8HIsIrq4o"];

let horrorLinks = ["https://www.youtube.com/watch?v=Y-ufZuqTd5c", "https://www.youtube.com/watch?v=qfSTiAw1rkM", "https://www.youtube.com/watch?v=7afc9gTbVFI", "https://www.youtube.com/watch?v=7vUQYzZ_UZc"];

let romanceLinks = ["https://www.youtube.com/watch?v=XtgCqMZofqM", "https://www.youtube.com/watch?v=5JyfgkPMXk0", "https://www.youtube.com/watch?v=WR21TH-6LfY", "https://www.youtube.com/watch?v=WTLgg8oRSBE"];

// Make sure to declare your HTML elements as variables! 
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let submit = document.querySelector(".submit");
let suggest = document.querySelector(".suggest");
let results = document.querySelector(".results");

// Submit Button 
let submitButton = document.querySelector("button");
submitButton.onclick = function() {
    let movies = input1.value;
    console.log(movies)
    if (movies === "comedy") {
        results.innerHTML = ""
        for (let index in comedy) {
            console.log(index)
            let picture = comedy[index]
            let video = comedyLinks[index]
            results.insertAdjacentHTML("beforeend", "<a href=" + video + "> <img alt='pictures of movies' src=" + picture + "/> </a>");
        }
    } else if (movies === "horror") {
        results.innerHTML = ""
        for (let index in horror) {
            console.log(index)
            let picture = horror[index]
            let video = horrorLinks[index]
            results.insertAdjacentHTML("beforeend", "<a href=" + video + "> <img alt='pictures of movies' src=" + picture + "/> </a>");
        }
    } else if (movies === "romance") {
        results.innerHTML = ""
        for (let index in romance) {
            console.log(index)
            let picture = romance[index]
            let video = romanceLinks[index]
            results.insertAdjacentHTML("beforeend", "<a href=" + video + "> <img alt='pictures of movies' src=" + picture + "/> </a>");
        }
    }
};

let suggestionButton = document.querySelector(".suggest");
suggestionButton.onclick = function() {
    let suggestion = document.querySelector(".input2").value;
    results.append("Thanks for your suggestion! Check the console to see that it was added!");
    comedy.push(suggestion);
    romance.push(suggestion);
    horror.push(suggestion);
    console.log(comedy);
    console.log(romance);
    console.log(horror);
};