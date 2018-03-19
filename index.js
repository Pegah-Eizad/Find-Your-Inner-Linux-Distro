let quizIntroText = `$ Find your inner Linux distribution [Enter/Tap to Start]? `;
let startQuizText = `Let's Go!`;
let goodbyeText = `Goodbye!`;

function typeText(elementId, text, position, callback) {
  var element = document.getElementById(elementId);
  var printing = text.substring(0,position);
  element.innerHTML = printing;
  if (position<text.length) {
    setTimeout(function() {
      typeText(elementId, text, position+1,callback);
    },10);
  } else {
    //callback();
  }
}

//intro 
function introduceQuiz(){
  console.log('inside introduceQuiz');
  $('input').focus();
  window.setTimeout(function afterOneSecond(){
    typeText('questions', quizIntroText, 1, function(){
    //document.getElementById('readyDiv').innerHTML = 'READY!!!';
  }), 5000});
  // $('.text-body').append(`<input type="text" name="user-input">`);
   let triggerQuiz = false;
  
  $(document).on('keydown click', function (event){

    var keycode = (event.keyCode ? event.keyCode : event.which);
    //console.log(keycode);
    console.log(triggerQuiz);
    if(event.which === 13 || event.which === 89 || event.which === 1){
      //console.log(keycode);
      triggerQuiz = true;
      //console.log(triggerQuiz);
    }
    //$('input').blur();
    if (triggerQuiz)
    { 
      //remove tests
      console.log('it worked');
      typeText('user-feedback', startQuizText, 0, function(){
        console.log('inside callback function');
      });

      //call start quiz since user said yes
      setTimeout(function afterOneSeconds(){
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
    $('.console-start').addClass('console').removeClass('console-start');
    generateQuestion();
}

function updateQuestionNumber(){
  console.log('UPDATING model.currentQuestion. model.currentQuestion is: ' + model.currentQuestion + 'updating...');
  model.currentQuestion++;
  console.log('new model.currentQuestion is: ' + model.currentQuestion);
}

function answerSubmit(){
  console.log('inside answerSubmit');
  $(document.body).on('submit', '#question-form', function(e){
    e.preventDefault();
    console.log('Default Preveted!!!!!');
    giveFeedback();
    addWeights();
}); 
}

function giveFeedback(){
  //let index = document.querySelector('input[name="answer"]:checked'.value);
  let index = document.querySelector('input[name="answer"]:checked').value;
  console.log('index is: ' + index);
  $('main').append(`<div class="answer-feedback">${dataArray[model.currentQuestion].answers[index].feedback}</div>
                    <button type="button" class="next-button"></button>`);
}

function nextClick(){
  $(document.body).on('click', '.next-button', (event) => { 
   clearPreviousQuestion();
    updateQuestionNumber();
    generateQuestion();
  });
}

function clearPreviousQuestion(){
    $('.user-answer').remove();
    $('.answer-feedback').remove();
    $('#questions').remove();
    $('.answers').remove();
    $('.next-button').remove();
}

function generateQuestion(){
  console.log('testing generateQuestion with model.currentQuestion' + model.currentQuestion);
  if (model.currentQuestion < dataArray.length) {
     //$('.questions').append(${dataArray[model.currentQuestion].question});
     $('div.text-body').append(`<p id="questions"></p>`);
     console.log(dataArray[model.currentQuestion].question);
     typeText('questions', dataArray[model.currentQuestion].question, 0, function(){
        console.log('inside callback function');
      });
     setTimeout(function afterOneSecond(){
       $('main').append(generateAnswers());
     }, 1200);
  }
  else{
    calculateResults();
  }
}

function generateAnswers(){
     //${STORE[model.currentQuestionber].question}
     console.log('inside generate answers with model.currentQuestion' + model.currentQuestion);

       var html = `<div class="answers">
                     <form id="question-form">
                     <fieldset>`;
       
       for (var i=0; i<dataArray[model.currentQuestion].answers.length; i++) {
         var selection = dataArray[model.currentQuestion].answers[i];
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

function addWeights(){
  let index = document.querySelector('input[name="answer"]:checked').value;
  model.totalWeight += dataArray[model.currentQuestion].answers[index].weight; 
}

function calculateResults(){
  let tw = model.totalWeight;
  for(let i=0; i<results.length; i++){
    if(tw >= results[i].min && tw <= results[i].max)
     displayResults(results[i].text);
  }
}

function displayResults(text){
  //inside console
  $('div.text-body').append('<p id="results"></p>');
  typeText('results', text, 0, function(){
    console.log('inside callback function in DISPLAYRESULTS');
  });
  //append restart button to main, CHECK SYNTAX
  setTimeout(() => {$('main').append('<button type="submit" class="restart-button">restart</button>');}, 1000);
}

function optionToRestart(){
   $(document.body).on('click', '.restart-button', function(){
      window.location.reload(true);
   });
}
//Create Quiz
$(document).ready(function(){
  console.log('inside quizApp.');
  introduceQuiz();
  answerSubmit();
  nextClick();
  optionToRestart();
  //get user answer 
});
