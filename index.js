
let questionNum = 0;
let quizIntroText = `Find your inner Linux distribution?[Enter]`;
let startQuizText = `Let's Go!`;
let goodbyeText = `Goodbye!`;
//let x = 0;

function typeText(elementId, text, position, callback) {
  var element = document.getElementById(elementId);
  var printing = text.substring(0,position);
  element.innerHTML = printing;
  if (position<text.length) {
    window.setTimeout(function() {
      typeText(elementId, text, position+1,callback);
    },10);
  } else {
    callback();
  }
}

//intro 
function introduceQuiz(){
  console.log('inside introduceQuiz');
  typeText('questions', quizIntroText, 1, function(){
    document.getElementById('readyDiv').innerHTML = 'READY!!!';
  });

  $('input').focus();

  $('input').on('keydown', function (event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    $('input').blur();
    console.log('key pressed!! ' + event.keyCode);
    if (event.which == 121 || event.which == 13){
      console.log('it worked');
      //$('.text-body').append('<p class="user-feedback">$ Let\'s Go!</p>');
      typeText('user-feedback', startQuizText, 0, function(){
        console.log('inside callback function');
      });
      //call start quiz since user said yes
      setTimeout(function afterTwoSeconds(){
       startQuiz();
      }, 2000);
    }
    else{
      typeText('user-feedback', goodbyeText, 0, 0, function(){
        console.log('inside callback function');
      });
    }
    //testing
    event.stopPropagation();
  }); 
}

function startQuiz()
{   
    console.log('inside startQuiz');
    //clear start page 
    $('#user-feedback').remove();
    //$('p.questions').removeClass('start-quiz-question');
    $('#questions').remove();
    $('input').remove();
    //move the shell up
    $('.text-editor-start').addClass('text-editor').removeClass('text-editor-start');
    renderQuestion();
}

function updateQuestionNumber(){
  console.log('UPDATING questionNum. questionNum is: ' + questionNum + 'updating...');
  questionNum++;
  console.log('new questionNum is: ' + questionNum);
}

function answerSubmit(){
  console.log('inside answerSubmit');
  $(document.body).on('submit', '#question-form', function(e){
    e.preventDefault();
    console.log('Default Preveted!!!!!');
    $('.user-answer').remove();
    $('.answer-feedback').remove();
    $('#questions').remove();
    $('.answers').remove();
    updateQuestionNumber();
    renderQuestion();
}); 
}

function giveFeedback(id){
  let x  = -1;
  switch (id){
    case 'selector0':  x=0;  break;
    case 'selector1':  x=1; break;
    case 'selector2':  x=2; break;
    case 'selector3':  x=3; break;
  }
  $('main').append(`<div class="answer-feedback">${dataArray[questionNum].answers[x].feedback}</div>`);
}

function renderQuestion(){
  console.log('inside renderQuestion');
  generateQuestion();
  setTimeout(function afterOneSecond(){
   $('main').append(generateAnswers());
  }, 1200);
}

function generateQuestion(){
  console.log('testing generateQuestion with questionNUm' + questionNum);
  if (questionNum < dataArray.length) {
     //$('.questions').append(${dataArray[questionNum].question});
     $('div.text-body').append(`<p id="questions"></p>`);
     console.log(dataArray[questionNum].question);
     typeText('questions', dataArray[questionNum].question, 0, function(){
        console.log('inside callback function');
      });
  }
}

function generateAnswers(){
     //${STORE[questionNumber].question}
     console.log('inside generate answers with questionnum' + questionNum);
     if (questionNum < dataArray.length) {
       return `<div class="answers">
       <form id="question-form">
       <fieldset>   
       <input id="selector0" type="radio" value="${dataArray[questionNum].answers[0].text}" name="answer" onClick="giveFeedback('selector0');"> 
       <label for="selector0" class="answerChoice1"><span>${dataArray[questionNum].answers[0].text}</span></label>
       <input id="selector1" type="radio" value="${dataArray[questionNum].answers[1].text}" name="answer" onClick="giveFeedback('selector1');">
       <label for="selector1" class="answerChoice2"><span>${dataArray[questionNum].answers[1].text}</span></label>
       <input id="selector2" type="radio" value="${dataArray[questionNum].answers[2].text}" name="answer" onClick="giveFeedback('selector2');">
       <label for="selector2" class="answerChoice3"><span>${dataArray[questionNum].answers[2].text}</span></label>
       <input id="selector3" type="radio" value="${dataArray[questionNum].answers[3].text}" name="answer" onClick="giveFeedback('selector3');">
       <label  for="selector3" class="answerChoice4"><span>${dataArray[questionNum].answers[3].text}</span></label>
       <button type="submit" class="submitButton">Submit</button>
       </fieldset>
       </form>
       </div>`;
  }

  
}
//Create Quiz
$(document).ready(function(){
  console.log('inside quizApp.');
  introduceQuiz();
  answerSubmit();
  //nextClick();
  //get user answer 
});

