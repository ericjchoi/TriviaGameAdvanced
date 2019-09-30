/* HW5 Trivia Game Advanced */
var min = 0;
var sec = 0;
var minutes = 0;
var seconds = 0;
var timeLimitSeconds = 0;
var timeLimitSecondsMain = 5 + 1;
// var timeOutAuto = 10 * 1000;
var timeOutAuto1 = 0; /* given time for question 1 */
var timeOutAuto2 = timeLimitSecondsMain * 1000; /* given time for question 2 */
var timeOutAuto3 = timeLimitSecondsMain * 1000; /* given time for question 3 */
var timeOutAuto4 = timeLimitSecondsMain * 1000; /* given time for question 4 */
var timeOutAuto5 = timeLimitSecondsMain * 1000; /* given time for question 5 */
var timeOutAuto6 = timeLimitSecondsMain * 1000; /* given time for question 6 */
var timeOutAuto7 = timeLimitSecondsMain * 1000; /* given time for question 7 */
var timeOutAuto8 = timeLimitSecondsMain * 1000; /* given time for score report */
var numCount = 1;
var playerAnswer = [10, 10, 10, 10, 10, 10, 10];
var correctAnswer = [4, 3, 5, 4, 4, 5, 4];
var numCorrect = 0;
var numIncorrect = 0;
var numUnanswered = 0;
var totalNumOfQuestions = 7;
var currentQuestionNum = 0;
var pauseTimeAfterAnswerImageShow = 2 * 1000;
var y = 0;
var x1 = 0;
var x2 = 0;
var x3 = 0;
var x4 = 0;
var x5 = 0;
var x6 = 0;
var x7 = 0;
var x8 = 0;
var question = {
    q1: {
        label: "1. Which planet is located closest to the Sun?",
        choice1: "Mars", choice2: "Saturn", choice3: "Neptune",
        choice4: "Mercury", choice5: "Earth", answer: "Mercury",
        answerImage: "assets/images/solarSystem.jpg"
    },
    q2: {
        label: "2. Which fruit is the biggest in size when fully ripened?",
        choice1: "Peach", choice2: "Blueberry", choice3: "Watermelon",
        choice4: "Apple", choice5: "Strawberry", answer: "Watermelon",
        answerImage: "assets/images/watermelon.jpg"
    },
    q3: {
        label: "3. Who is not a super hero?",
        choice1: "Superman", choice2: "Acuaman", choice3: "Wonder Woman",
        choice4: "Spiderman", choice5: "Homer Simpson", answer: "Homer Simpson",
        answerImage: "assets/images/homerSimpson.jpg"
    },
    q4: {
        label: "4. Who is not a Beatles member?",
        choice1: "John Lennon", choice2: "Paul McCartney", choice3: "George Harrison",
        choice4: "Gordon Ramsay", choice5: "Ringo Starr", answer: "Gordon Ramsay",
        answerImage: "assets/images/gordonRamsay.jpeg"
    },
    q5: {
        label: "5. Which one has different purpose?",
        choice1: "Pizza", choice2: "Ice cream", choice3: "Pasta",
        choice4: "Airplane", choice5: "Cake", answer: "Airplane",
        answerImage: "assets/images/boeing767Airplane.jpg"
    },
    q6: {
        label: "6. Which is a biggest US state in size?",
        choice1: "Washington", choice2: "California", choice3: "New York",
        choice4: "Oregon", choice5: "Texas", answer: "Texas",
        answerImage: "assets/images/texasInUSmap.jpg"
    },
    q7: {
        label: "7. Which number is the second smallest number?",
        choice1: "0.5", choice2: "0.5 X 0.5", choice3: "0.5 X 0.5 X 0.5",
        choice4: "0.5 X 0.5 X 0.5 X 0.5", choice5: "0.5 X 0.5 X 0.5 X 0.5 X 0.5",
        answer: "0.5 X 0.5 X 0.5 X 0.5",
        answerImage: "assets/images/numberComparison.jpg"
    }
}
function hideQuestionContainer() {
    $("#questionContainer").hide();
}
function showQuestionContainer() {
    $("#questionContainer").show();
}
/* calculate minutes-part and seconds-part from remaining time in seconds */
function timeTransform(t) {
    minutes = Math.floor(t / 60);
    seconds = t - (minutes * 60);
    if (minutes < 10) {
        min = "0" + minutes;
    } else {
        min = minutes;
    }
    if (seconds < 10) {
        sec = "0" + seconds;
    } else {
        sec = seconds;
    }
    return min + ":" + sec;
}
function timeRunning() {
    timeLimitSeconds = timeLimitSecondsMain;
    y = setInterval(function () {
        timeLimitSeconds--;
        document.getElementById("timeDisplay").innerHTML = timeTransform(timeLimitSeconds);

    }, 1000); /* perform setInterval function every 1 seconds  */
}
function hideTempResult() {
    $("#tempResultLabel1").hide();
    $("#tempResultLabel2").hide();
    $("#tempResultLabel3").hide();
    $("#tempCorrectAnswerLabel2").hide();
    $("#tempCorrectAnswerLabel3").hide();
    $("#answerImage1").hide();
    $("#answerImage2").hide();
    $("#answerImage3").hide();
    $("#answerImage4").hide();
    $("#answerImage5").hide();
    $("#answerImage6").hide();
    $("#answerImage7").hide();
}
function showTempResultCorrect() {
    $("#tempResultLabel1").show();
    $("#tempResultLabel2").show();
    $("#tempCorrectAnswerLabel2").show();
}
function showTempResultIncorrect() {
    $("#tempResultLabel1").show();
    $("#tempResultLabel3").show();
    $("#tempCorrectAnswerLabel3").show();
}
function showQuestion1() {
    hideTempResult();
    showQuestionContainer();
    $("#questionLabel").text(question.q1.label);
    $("#choice1").text(question.q1.choice1);
    $("#choice2").text(question.q1.choice2);
    $("#choice3").text(question.q1.choice3);
    $("#choice4").text(question.q1.choice4);
    $("#choice5").text(question.q1.choice5);
}
function showQuestion2() {
    hideTempResult();
    showQuestionContainer();
    $("#questionLabel").text(question.q2.label);
    $("#choice1").text(question.q2.choice1);
    $("#choice2").text(question.q2.choice2);
    $("#choice3").text(question.q2.choice3);
    $("#choice4").text(question.q2.choice4);
    $("#choice5").text(question.q2.choice5);
}
function showQuestion3() {
    hideTempResult();
    showQuestionContainer();
    $("#questionLabel").text(question.q3.label);
    $("#choice1").text(question.q3.choice1);
    $("#choice2").text(question.q3.choice2);
    $("#choice3").text(question.q3.choice3);
    $("#choice4").text(question.q3.choice4);
    $("#choice5").text(question.q3.choice5);
}
function showQuestion4() {
    hideTempResult();
    showQuestionContainer();
    $("#questionLabel").text(question.q4.label);
    $("#choice1").text(question.q4.choice1);
    $("#choice2").text(question.q4.choice2);
    $("#choice3").text(question.q4.choice3);
    $("#choice4").text(question.q4.choice4);
    $("#choice5").text(question.q4.choice5);
}
function showQuestion5() {
    hideTempResult();
    showQuestionContainer();
    $("#questionLabel").text(question.q5.label);
    $("#choice1").text(question.q5.choice1);
    $("#choice2").text(question.q5.choice2);
    $("#choice3").text(question.q5.choice3);
    $("#choice4").text(question.q5.choice4);
    $("#choice5").text(question.q5.choice5);
}
function showQuestion6() {
    hideTempResult();
    showQuestionContainer();
    $("#questionLabel").text(question.q6.label);
    $("#choice1").text(question.q6.choice1);
    $("#choice2").text(question.q6.choice2);
    $("#choice3").text(question.q6.choice3);
    $("#choice4").text(question.q6.choice4);
    $("#choice5").text(question.q6.choice5);
}
function showQuestion7() {
    hideTempResult();
    showQuestionContainer();
    $("#questionLabel").text(question.q7.label);
    $("#choice1").text(question.q7.choice1);
    $("#choice2").text(question.q7.choice2);
    $("#choice3").text(question.q7.choice3);
    $("#choice4").text(question.q7.choice4);
    $("#choice5").text(question.q7.choice5);
}
function scoreReport() {
    for (var i = 0; i < question.length; i++) {
        if (playerAnswer[i] === correctAnswer[i]) { /* counting correct answer */
            numCorrect += 1;
        } else if (playerAnswer[i] === 10) { /* counting unanswered */
            numUnanswered += 1;
        } else { /* counting incorrect answer */
            numIncorrect += 1;
        }
    }
}
function hideScoreReport() {
    $("#scoreReportContainer").hide();
}
function showScoreReport() {
    $("#questionContainer").hide();
    $("#tempResultContainer").hide();
    $("#scoreReportContainer").show();
    for (var i = 0; i < playerAnswer.length; i++) {
        if (playerAnswer[i] === 10) {
            numUnanswered += 1;
        }
    }
    $("#numCorrect").text(numCorrect);
    $("#numIncorrect").text(numIncorrect);
    $("#numUnanswered").text(numUnanswered);
    $("#numCorrectPercent").text(((numCorrect / totalNumOfQuestions) * 100).toFixed(2));
    $("#numIncorrectPercent").text(((numIncorrect / totalNumOfQuestions) * 100).toFixed(2));
    $("#numUnansweredPercent").text(((numUnanswered / totalNumOfQuestions) * 100).toFixed(2));
}
function universalClickChoice() {
    $(".choices").on("click", function () {
        if (currentQuestionNum === 1) {
            hideQuestionContainer();
            if (this.id === "choice4") { /* correct answer clicked for question 1 */
                numCorrect++;
                showTempResultCorrect();
                $("#tempResultLabel1").text("Yes !!");
                $("#tempCorrectAnswerLabel2").text(question.q1.answer);
            } else {/* incorect answer clicked for question 1 */
                numIncorrect++;
                showTempResultIncorrect();
                $("#tempResultLabel1").text("Nope !!");
                $("#tempCorrectAnswerLabel3").text(question.q1.answer);
            }
            $("#answerImage1").show();
            playerAnswer[0] = 1;
        }
        else if (currentQuestionNum === 2) {
            hideQuestionContainer();
            if (this.id === "choice3") { /* correct answer clicked for question 2 */
                numCorrect++;
                showTempResultCorrect();
                $("#tempResultLabel1").text("Yes !!");
                $("#tempCorrectAnswerLabel2").text(question.q2.answer);
            } else {/* incorect answer clicked for question 2 */
                numIncorrect++;
                showTempResultIncorrect();
                $("#tempResultLabel1").text("Nope !!");
                $("#tempCorrectAnswerLabel3").text(question.q2.answer);
            }
            $("#answerImage2").show();
            playerAnswer[1] = 1;
        }
        else if (currentQuestionNum === 3) {
            hideQuestionContainer();
            if (this.id === "choice5") { /* correct answer clicked for question 3 */
                numCorrect++;
                showTempResultCorrect();
                $("#tempResultLabel1").text("Yes !!");
                $("#tempCorrectAnswerLabel2").text(question.q3.answer);
            } else {/* incorect answer clicked for question 3 */
                numIncorrect++;
                showTempResultIncorrect();
                $("#tempResultLabel1").text("Nope !!");
                $("#tempCorrectAnswerLabel3").text(question.q3.answer);
            }
            $("#answerImage3").show();
            playerAnswer[2] = 1;
        }
        else if (currentQuestionNum === 4) {
            hideQuestionContainer();
            if (this.id === "choice4") { /* correct answer clicked for question 4 */
                numCorrect++;
                showTempResultCorrect();
                $("#tempResultLabel1").text("Yes !!");
                $("#tempCorrectAnswerLabel2").text(question.q4.answer);
            } else {/* incorect answer clicked for question 4 */
                numIncorrect++;
                showTempResultIncorrect();
                $("#tempResultLabel1").text("Nope !!");
                $("#tempCorrectAnswerLabel3").text(question.q4.answer);
            }
            $("#answerImage4").show();
            playerAnswer[3] = 1;
        }
        else if (currentQuestionNum === 5) {
            hideQuestionContainer();
            if (this.id === "choice4") { /* correct answer clicked for question 5 */
                numCorrect++;
                showTempResultCorrect();
                $("#tempResultLabel1").text("Yes !!");
                $("#tempCorrectAnswerLabel2").text(question.q5.answer);
            } else {/* incorect answer clicked for question 5 */
                numIncorrect++;
                showTempResultIncorrect();
                $("#tempResultLabel1").text("Nope !!");
                $("#tempCorrectAnswerLabel3").text(question.q5.answer);
            }
            $("#answerImage5").show();
            playerAnswer[4] = 1;
        }
        else if (currentQuestionNum === 6) {
            hideQuestionContainer();
            if (this.id === "choice5") { /* correct answer clicked for question 6 */
                numCorrect++;
                showTempResultCorrect();
                $("#tempResultLabel1").text("Yes !!");
                $("#tempCorrectAnswerLabel2").text(question.q6.answer);
            } else {/* incorect answer clicked for question 6 */
                numIncorrect++;
                showTempResultIncorrect();
                $("#tempResultLabel1").text("Nope !!");
                $("#tempCorrectAnswerLabel3").text(question.q6.answer);
            }
            $("#answerImage6").show();
            playerAnswer[5] = 1;
        }
        else /* currentQuestionNum === 7 */ {
            hideQuestionContainer();
            if (this.id === "choice4") { /* correct answer clicked for question 7 */
                numCorrect++;
                showTempResultCorrect();
                $("#tempResultLabel1").text("Yes !!");
                $("#tempCorrectAnswerLabel2").text(question.q7.answer);
            } else {/* incorect answer clicked for question 7 */
                numIncorrect++;
                showTempResultIncorrect();
                $("#tempResultLabel1").text("Nope !!");
                $("#tempCorrectAnswerLabel3").text(question.q7.answer);
            }
            $("#answerImage7").show();
            playerAnswer[6] = 1;
        }
    });
}
function mainGame() {
    hideQuestionContainer();
    hideTempResult();
    hideScoreReport();
    $("#startBtnContainer").on("click", function () { /* procedure after start button clicked */
        $("#startBtnContainer").hide(); /* hide start button */
        timeRunning();
        universalClickChoice(); /* click choice button event handling for each questions */

        x1 = setTimeout(function () { /* question 1 */
            timeLimitSeconds = timeLimitSecondsMain;
            currentQuestionNum++;
            showQuestion1();
            x2 = setTimeout(function () { /* question 2 */
                timeLimitSeconds = timeLimitSecondsMain;
                currentQuestionNum++;
                showQuestion2();
                x3 = setTimeout(function () { /* question 3 */
                    timeLimitSeconds = timeLimitSecondsMain;
                    currentQuestionNum++;
                    showQuestion3();
                    x4 = setTimeout(function () { /* question 4 */
                        timeLimitSeconds = timeLimitSecondsMain;
                        currentQuestionNum++;
                        showQuestion4();
                        x5 = setTimeout(function () { /* question 5 */
                            timeLimitSeconds = timeLimitSecondsMain;
                            currentQuestionNum++;
                            showQuestion5();
                            x6 = setTimeout(function () { /* question 6 */
                                timeLimitSeconds = timeLimitSecondsMain;
                                currentQuestionNum++;
                                showQuestion6();
                                x7 = setTimeout(function () { /* question 7 */
                                    timeLimitSeconds = timeLimitSecondsMain;
                                    currentQuestionNum++;
                                    showQuestion7();
                                    x8 = setTimeout(function () { /* score report */
                                        clearInterval(y);
                                        currentQuestionNum++;
                                        showScoreReport();
                                    }, timeOutAuto8);
                                }, timeOutAuto7);
                            }, timeOutAuto6);
                        }, timeOutAuto5);
                    }, timeOutAuto4);
                }, timeOutAuto3);
            }, timeOutAuto2);
        }, timeOutAuto1);
    });
}
/* main game */
$(document).ready(function () {
    mainGame();
});


