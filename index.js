
let questionNum = 0;
let quizIntroText = `Find your inner Linux distribution?[Enter]`;
let startQuizText = `Let's Go!`;
let goodbyeText = `Goodbye!`;

function typeText(elementId, text, position, callback) {
  console.log('inside tyepText with elementID:' + elementId);
  console.log('inside typetext with text:' + text);
  console.log('inside tyepText with position:' + position);
  var element = document.getElementById(elementId);
  // var element = $('#' + elementId);
  var printing = text.substring(0,position);
  element.innerHTML = printing;
  // element.html(printing);
  
  if (position<text.length) {
    window.setTimeout(function() {
      typeText(elementId, text, position+1,callback);
    },10);
  } else {
    callback();
  }
}
/*
String.prototype.type = function(elementId, position, callback) {
  var self = this;
  var element = document.getElementById(elementId);
  // var element = $('#' + elementId);
  var printing = this.substring(0,position);
  element.innerHTML = printing;
  // element.html(printing);
  
  if (position<this.length) {
    window.setTimeout(function() {
      self.type(elementId, position+1,callback);
    },10);
  } else {
    callback();
  }
}
*/
//intro 
function introduceQuiz(){
  console.log('inside introduceQuiz');
  /*
   $('input').keydown(event =>
    $('.output').text(`Key pressed: ${event.key}`)
  );
  */
  typeText('questions', quizIntroText, 1, function(){
    document.getElementById('readydiv').innerHTML = 'READY!!!';
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
      //stop
      //$('.text-body').append('<p class="user-feedback">$ Goodbye!</p>');
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
    $('.user-feedback').remove();
    //$('p.questions').removeClass('start-quiz-question');
    $('.questions').remove();
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
    //give feedback
    giveFeedback();
    //render nextQuestion
}); 
}

function giveFeedback(){
   
  $(document.body).unbind('submit'); 
  let answerSelected = document.querySelector('input[name="answer"]:checked').value;
  let answerSelectedId = document.querySelector('input[name="answer"]:checked'.id);
  let x = 0;
  switch (answerSelectedId){
    case 'selector1':  x=1; break;
    case 'selector2':  x=2; break;
    case 'selector3':  x=3; break;
    case 'selector4':  x=4; break;
  }
  //clear page content
  $('.questions').remove();
  $('.answers').remove();
  $('.text-editor').remove();
  //display feedback content  
  //dataArray[questionNum].answers[$('input[name=answer]:checked').val()]
  $('main').append(`<div class="user-answer">${answerSelected}</div>
                     <div class="answer-feedback"> ${dataArray[questionNum].answers[x].feedback} </div>
                     <button type="button" class="next-button">Next</button>`);

}


function nextClick(){
  $(document.body).on('click', '.next-button', function(e){
    $('.user-answer').remove();
    $('.answer-feedback').remove();
    $('.next-button').remove();
    //$(document.body).bind('submitButt')
    let textEditorDiv = `<div class="text-editor">
        <div class="title-bar"><span class="title">typed.js &mdash; bash &mdash; 80x<span class="terminal-height">25</span></span></div>
        <div class="text-body">
          <span class="type-writer-constant-texts"> Last login: Sat Feb 24 14:36:27 on tt </span>
          <br> 
          <span class="type-writer-constant-texts">$</span>
        </div>
    </div>`;
    $('main').append(textEditorDiv);
    updateQuestionNumber();
    renderQuestion();
    answerSubmit();
  });
}


function renderQuestion(){
  console.log('inside renderQuestion');
  generateQuestion();
  setTimeout(function afterOneSecond(){
   $('main').append(generateAnswers());
  }, 1500);
}

function generateQuestion(){
  console.log('testing generateQuestion with questionNUm' + questionNum);
  if (questionNum < dataArray.length) {
     //$('.questions').append(${dataArray[questionNum].question});
     $('div.text-body').append(`<p class="questions">${dataArray[questionNum].question}</p>`);
  }
}

/*
    <input id="selector0" type="radio" name="select" value="M">
    <label for="selector0">Male</label>
*/
function generateAnswers(){
     //${STORE[questionNumber].question}
     console.log('inside generate answers with questionnum' + questionNum);
     if (questionNum < dataArray.length) {
       return `<div class="answers">
       <form id="question-form">
       <fieldset>   
       <input id="selector0" type="radio" value="${dataArray[questionNum].answers[0].text}" name="answer" required> 
       <label for="selector0" class="answerChoice1"><span>${dataArray[questionNum].answers[0].text}</span></label>
       <input id="selector1" type="radio" value="${dataArray[questionNum].answers[1].text}" name="answer" required>
       <label for="selector1" class="answerChoice2"><span>${dataArray[questionNum].answers[1].text}</span></label>
       <input id="selector2" type="radio" value="${dataArray[questionNum].answers[2].text}" name="answer" required>
       <label for="selector2" class="answerChoice3"><span>${dataArray[questionNum].answers[2].text}</span></label>
       <input id="selector3" type="radio" value="${dataArray[questionNum].answers[3].text}" name="answer" required>
       <label  for="selector3" class="answerChoice4"><span>${dataArray[questionNum].answers[3].text}</span></label>
       <input id="selector4" type="radio" value="${dataArray[questionNum].answers[4].text}" name="answer" required>
       <label for="selector4" class="answerChoice5"><span>${dataArray[questionNum].answers[4].text}</span></label>
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
  nextClick();
  //get user answer 
});
