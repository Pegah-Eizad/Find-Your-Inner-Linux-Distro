
let questionNum = 0;
let quizIntroText = `Find your inner Linux distribution?[Enter/Tap to Start]`;
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
    //callback();
  }
}

//intro 
function introduceQuiz(){
  console.log('inside introduceQuiz');
  typeText('questions', quizIntroText, 1, function(){
    document.getElementById('readyDiv').innerHTML = 'READY!!!';
  });
   let triggerQuiz = true;
  $('input').focus();
  $(document).on('keydown click', function (event){

    var keycode = (event.keyCode ? event.keyCode : event.which);
    //console.log(keycode);
    console.log(triggerQuiz);
    if(event.which != 13 && event.which != 89 && event.which != 1){
      //console.log(keycode);
      triggerQuiz = false;
      //console.log(triggerQuiz);
    }
    $('input').blur();
    if (triggerQuiz)
    {
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
    $(document).unbind('keydown');
    $(document).unbind('click');
    //clear start page 
    $('#user-feedback').remove();
    //$('p.questions').removeClass('start-quiz-question');
    $('#questions').remove();
    $('input').remove();
    $('.start-quiz').remove();
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
    giveFeedback();
    //updateQuestionNumber();
    //renderQuestion();
}); 
}

function giveFeedback(){
  //let index = document.querySelector('input[name="answer"]:checked'.value);
  let index = document.querySelector('input[name="answer"]:checked').value;
  console.log('index is: ' + index);
  $('main').append(`<div class="answer-feedback">${dataArray[questionNum].answers[index].feedback}</div>
                    <button type="button" class="next-button"></button>`);
}

function nextClick(){
  $(document.body).on('click', '.next-button', (event) => { 
   clearPreviousQuestion();
    updateQuestionNumber();
    renderQuestion();
  });
}

function renderQuestion(){
  console.log('inside renderQuestion');
  //clearPreviousQuestion();
  generateQuestion();
  setTimeout(function afterOneSecond(){
   $('main').append(generateAnswers());
  }, 1200);
}

function clearPreviousQuestion(){
    $('.user-answer').remove();
    $('.answer-feedback').remove();
    $('#questions').remove();
    $('.answers').remove();
    $('.next-button').remove();
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
       var html = `<div class="answers">
                     <form id="question-form">
                     <fieldset>`;
       
       for (var i=0; i<dataArray[questionNum].answers.length; i++) {
         var selection = dataArray[questionNum].answers[i];
         html += `
          <input id="selector${i}" type="radio" value="${i}" name="answer"> 
          <label for="selector${i}" class="answerChoice1"><span>${selection.text}</span></label>
         `;
       }
       html += `<button type="submit" class="submitButton">Submit</button>
                     </fieldset>
                     </form>
                     </div>`;
       
      return html;
  }

  
}
//Create Quiz
$(document).ready(function(){
  console.log('inside quizApp.');
  introduceQuiz();
  answerSubmit();
  nextClick();
  //get user answer 
});

//onClick="giveFeedback(${i});
