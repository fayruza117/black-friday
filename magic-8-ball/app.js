const points = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely ",
    "You may rely on it",
    "As I see it",
    "Most likely ",
    "Outlook good ",
    "Yes ",
    "point to yes",
    "Reply hazy, try again" ,
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it", 
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
];
// document.getElementById("response").innerHTML=points;

function myFunction(){
    points.sort(function(a,b){return 0.5 - Math.random()});
    document.getElementById("response").innerHTML=points[0];
    document.getElementById("response").style.fontSize="18px";
    setTimeout(timeup, 4000);

    function timeup(){
        document.getElementById("response").innerHTML="8";
        document.getElementById("response").style.fontSize ="120px";

    }
}