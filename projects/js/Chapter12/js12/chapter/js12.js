"use strict";

/*  JavaScript 7th Edition
    Chapter 12
    Chapter case

    Bonsai Expressions FAQ 
    Author: 
    Date:   

    Filename: js12.js
*/

//Run when page is ready
$( () => {

    $("section > h1").css({
        fontSize: 0,
        opacity: 0
    })
    .animate({
        fontSize: "2.3em",
        opacity: 1
    }, 600);

    

    $("dl#faq dt").click( e => {
        let question = $(e.target);
        let answer = $(question.next());

        $(question).toggleClass("hiddenAnswer");

        if($(question).hasClass("hiddenAnswer")) {
            $(answer).hide();
        } else {
            $(answer).show();
        }
    });

    

});