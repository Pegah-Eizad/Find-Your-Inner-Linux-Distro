let quizIntroText = `$ Find your inner Linux distribution? [Enter/Tap to Start]`;
let startQuizText = `$ Let's Go!`;
let goodbyeText = `$ Goodbye!`;


function typeText(elementId, text, position) {
  var element = document.getElementById(elementId);
  var printing = text.substring(0,position);
  element.innerHTML = printing;
  if (position < text.length) {
    setTimeout(function() {
      typeText(elementId, text, position+1);
    },10);
  } 
}


//start-page 
function introduceQuiz(){
  window.setTimeout(function afterOneSecond(){
    typeText('questions', quizIntroText, 1), 5000});
  $('.user-input-start-console').css("visibility", "visible");
  $('.user-input-start-console').focus();
  let isKeyPressed = false;

  $(document).on('keydown click', function (event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    $('.user-input-start-console').css("color", "transparent");
    if(event.which === 13 || event.which === 89 || event.which === 1){  
      typeText('user-feedback-start-console', startQuizText, 0);
      setTimeout(function afterOneSeconds(){
       startQuiz();
      }, 1500);
    }
    else{
      // $('.give-feedback-start-console').append('<input type="text" class="quiz-rejected" name="quiz-rejected">');
      $(document).off('keydown click');
      typeText('user-feedback-start-console', goodbyeText, 0);
    }
    event.stopPropagation();
  });  
}


function startQuiz()
{   
    $(document).unbind('keydown');
    $(document).unbind('click');
    //clear start page 
    $('#user-feedback-start-console').remove();
    $('#questions').remove();
    $('.user-input-start-console').remove();
    $('.cursor').remove();
    $('.console-start').addClass('console').removeClass('console-start');
    $('.console-defaults').html('Question: ' + (model.currentQuestion+1) + ' of 10');
    generateQuestion();
}

function updateQuestionNumber(){
  model.currentQuestion++;
}

function answerSubmit(){
  $(document.body).on('submit', '#question-form', function(e){
    e.preventDefault();
    giveFeedback();
    addWeights();
}); 
}

function giveFeedback(){
  let index = document.querySelector('input[name="answer"]:checked');
  if (index == null){
    console.log('No input!');  
  }
  else{
    index = index.value;
    //remove uncheched divs
    $('input[name=answer]').each(function(){
        if(!this.checked){
          (this).closest('div').remove();
        }
    });
    $('.submit-button').remove();
    $('main').append(`<div class="answer-feedback">${dataArray[model.currentQuestion].answers[index].feedback}</div>
                    <div class="next-button"><button type="button" class="next-button">{ Next }</button></div>`);
  } 
}

function nextClick(){
  $(document.body).on('click', 'button.next-button', (event) => { 
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
  if (model.currentQuestion < dataArray.length){
     $('.console-defaults').html('Question: ' + (model.currentQuestion+1) + ' of 10');
     $('div.console-body').append(`<p id="questions"></p>`);
     typeText('questions', dataArray[model.currentQuestion].question, 0);
     setTimeout(function afterOneSecond(){
       $('main').append(generateAnswers());
     }, 1200);
  }
  else{
    calculateResults();
  }
}


function generateAnswers(){
  var html = `<div class="answers">
                <form role="form" id="question-form">`;
       
  for (var i=0; i<dataArray[model.currentQuestion].answers.length; i++) {
    var selection = dataArray[model.currentQuestion].answers[i];
    html += `
    <div class="div${i}">
    <input id="selector${i}" type="radio" value="${i}" name="answer" required> 
    <label for="selector${i}" class="answerChoice${i}"><span>${selection.text}</span></label>
    </div>`;
  }
  html += `<div class="submit-button"> <button type="submit" class="submit-button">{ Submit }</button> </div>
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
  $('.console-defaults').html('Results:');
  $('div.console-body').append('<p id="results"></p>');
  $('.console').height('80%');
  typeText('results', text, 0, function(){
    console.log('inside callback function in DISPLAYRESULTS');
  });
  //append restart button to main, arrow fn
  setTimeout(() => {$('main').append('<div class="restart-button"><button type="submit" class="restart-button">restart</button></div>\
    <p class="source">Source: https://www.proprofs.com/quiz-school/story.php?title=Which-Linux-distribution-are-you-1</p>');}, 1000);
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
});
