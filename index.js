let quizIntroText = `$ Find your inner Linux distribution [Enter/Tap to Start]? `;
let startQuizText = `$ Let's Go!`;
let goodbyeText = `$ Goodbye!`;
let wait = 0;

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
  $('.user-input').focus();
  window.setTimeout(function afterOneSecond(){
    typeText('questions', quizIntroText, 1, function(){
    //document.getElementById('readyDiv').innerHTML = 'READY!!!';
  }), 5000});
  // $('.text-body').append(`<input type="text" name="user-input">`);
   let triggerQuiz = false;
   let keyPressed = 0;
  
  $(document).on('keydown click', function (event){

    var keycode = (event.keyCode ? event.keyCode : event.which);
    $('.user-input').blur();
    keyPressed ++;
    //console.log(keycode);
    console.log(triggerQuiz);
    if(event.which === 13 || event.which === 89 || event.which === 1){
      
      triggerQuiz = true;
    }
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
      }, 1000);
    }
    else{

      if(keyPressed === 1){
         $('.text-body').append('<input type="text" class="cursor" name="user-feedback">');
      }
      $('.cursor').focus();
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
    $('.user-input').remove();
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
  let index = document.querySelector('input[name="answer"]:checked');
  if (index == null){
    //do something
    
  }
  else{
    //do the rest
    index = index.value;
    console.log('index is: ' + index);
    //remove uncheched divs
   $('input[name=answer]').each(function(){
        if(!this.checked){
          (this).closest('div').remove();
        }
   });
   $('.submit-button').remove();
    $('.answers').height('20%');
    setTimeout(function(){
                $('main').append(`<div class="answer-feedback">${dataArray[model.currentQuestion].answers[index].feedback}</div>
                                  <button type="button" class="next-button"></button>`);
       }, 1000);
  }
  
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
                     `;
       
       for (var i=0; i<dataArray[model.currentQuestion].answers.length; i++) {
         var selection = dataArray[model.currentQuestion].answers[i];
         html += `
         <div class="div${i}">
          <input id="selector${i}" type="radio" value="${i}" name="answer" required> 
          <label for="selector${i}" class="answerChoice${i}"><span>${selection.text}</span></label>
        </div>
         `;
       }
       html += `<div class="submit-button"> <button type="submit" class="submit-button">Submit</button> </div>
                     
                     </form>
                     </div>`;
       
      return html;
}
/*
function displayAnswers() {
    // If there are hidden divs left
    /*
    console.log('inside displayAnswers');
    if($('div:hidden').length) {
        console.log('divs hidden');
        // Fade the first of them in
        $('div:hidden:first').fadeIn();
        // And wait one second before fading in the next one
        setTimeout(displayAnswers, 1000);
    }
    console.log('inside displayAnswers');
    $(".div0, .div1, .div2, .div3").each(function(i) {
      console.log('in here');
      $(this).delay(i*1500).fadeIn(1500);
});
}
  */    
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
