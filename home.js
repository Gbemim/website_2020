/* if (typeof window === 'undefined') {
    global.window = {}
}

// This is for something to go back to again cuz I was hella confused

window.open = function(){
    $('social_li1').onclick = myFacebook;
};

function myFacebook(facebookLink){
    facebookLink ("http://www.facebook.com/");
}


window.open = function(){
    $("social_li1").onclick = myFacebook;
};

function myFacebook(_facebookLink){
   facebookLink = ("http://www.facebook.com/");
}
 */


/* URL's links to my  social media */ 
function myFacebook(){
    window.open("https://www.facebook.com");
}

function myEmail(){
    window.open("mailto:gbemisolaakerele@gmail.com");
}

function myGithub(){
    window.open("https://www.github.com");
}

function myInstagram(){
    window.open("https://www.instagram.com");
}

function myLinkedin(){
    window.open("https://www.linkedin.com");
}

// Once it is launched/on the web, 
// change the url link for home to a http link
function myLogo(){
    window.location("./home.html");
}

