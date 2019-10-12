'use strlct';
var user = prompt(" Can You Please Tell Us Your Name ")
alert("Welcome You Here " + user)
var counter = 0;

function guesswhat() {
    var questions = [
        ['Do you know what my name is??',
            'WOW!! You made me happy',
            'Saddened me !! Now you know me',

        ],
        ['Have an idea about what I studied at the university?',
            'GREAT^_^',
            'Its okay !!',
        ],
        [
            'What about my age do you know??',
            'hahah Nice ',
            'never mind',
        ],
        [

            'Do you know my favorite color??',
            ' Iam so happy haha ',
            'okay',

        ],
        [
            'Are the questions boring??',
            'Iam so SORRY',
            'THANK YOU',


        ],
        ['Have an idea about what I studied at the university?',
            'GREAT^_^',
            'Its okay !!',
        ],
        [
            'What about my age do you know??',
            'hahah Nice ',
            'never mind',
        ],
        [

            'Do you know my favorite color??',
            ' Iam so happy haha ',
            'okay',

        ],
        [
            'Are the questions boring??',
            'Iam so SORRY',
            'THANK YOU',
        ]

    ]





    for (var i = 0; i < 5; i++) {
        var exactArray = questions[i];
        var promptQuestion = exactArray[0];
        var posetiveReply = exactArray[1];
        var negativeReply = exactArray[2];

        var name = prompt(promptQuestion);
        name = name.toLowerCase();
        switch (name) {
            case "yes":
            case "y":
                counter = counter + 1;
                console.log(name);
                alert(posetiveReply);
                break;
            case "no":
            case "n":
                console.log(name);
                alert(negativeReply);
                break;
            default:
                alert("Try to solve it");

                break;
        }
    }
}
guesswhat();

function failed() {



    for (var num = 0; num < 4; num++) {
        var mark = prompt("Guess  how many times I failed in the university materials??")
        if (mark == 5) {
            alert("Yes exactly! hahahh");
            counter = counter + 1;
            console.log(mark);
            break;
        } else if (mark > 5) {
            alert("too high !!");
            console.log(mark);
        } else if (mark < 5) {
            alert(" too low");
            console.log(mark);
        }
    }
}
failed();
alert("5 times hahaha")
function foods() {


    var food = ['kabseh', 'mansaf', 'makloba', 'ylngi', 'makhshi', 'shawerma'];
    for (var count = 0; count < 5; count++) {
        var feedMe = prompt("I love 6 different foods.. Can you guess one of them?");
        switch (feedMe) {
            case food[0]:
            case food[1]:
            case food[2]:
            case food[3]:
            case food[4]:
            case food[5]:
                alert(" You are right.. My fav foods are: kabseh, mansaf, makloba, ylngi, makhshi, shawerma");
                counter = counter + 1;
                alert("You got " + counter + " points after completing the quiz");
                console.log(feedMe);
                count = 5;
                break;
            default:
                alert("You are wrong .. Try it again ")
                console.log(feedMe);
                break;
        }
    }
}
foods();
alert("Your points are " + counter)
alert("Thanks for being here " + food);