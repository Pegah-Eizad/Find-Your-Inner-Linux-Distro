
let questionNum = 0;

//intro 
function introduceQuiz(){
  //let feedback = 'hi'; //populate for testing
  console.log('inside getUserAnswer');
  //might want to change to a CSS selector rather than a jQuery object which runs in parallel
  //with the bottom jQuery object
  $(document).on('keypress', function (event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    console.log('key pressed!! ' + event.keyCode);
    if (event.which == 121 || event.which == 13){
      console.log('it worked');
      $('.user-feedback').append('<p class="user-feedback">$ Let\'s Go!</p>');
      //call start quiz since user said yes
      setTimeout(function afterTwoSeconds(){
       startQuiz();
      }, 2000);
    }
    else{
      //stop
      $('.user-feedback').append('<p class="user-feedback">$ Goodbye!</p>');
    }
    event.stopPropegation();
  }); 
  //alert('Get user answer finished');
}


function startQuiz()
{   
    console.log('inside startQuiz');
    //clear start page 
    $('.user-feedback').remove();
    //$('p.questions').removeClass('start-quiz-question');
    $('.questions').remove();
    //move the shell up
    $('.text-editor-start').addClass('text-editor').removeClass('text-editor-start');
    renderNextQuestion();
    //setTimeout(function afterOneSecond(){
       
    //}, 1000);
}

function generateQuestion(){
  console.log('testing generateQuestion');
  if (questionNum < dataArray.length) {
     //$('.questions').append(${dataArray[questionNum].question});
     $('div.text-body').append(`<p class="questions">${dataArray[questionNum].question}</p>`);
  }
}
function generateAnswers(){
     //${STORE[questionNumber].question}
     if (questionNum < dataArray.length) {
       return `<div class="question-${questionNum}">
       <form>
       <fieldset>
       <label class="answerChoice">
       <input type="radio" value="${dataArray[questionNum].answers[0].text}" name="answer" required>
       <span>${dataArray[questionNum].answers[0].text}</span>
       </label>
       <label class="answerChoice">
       <input type="radio" value="${dataArray[questionNum].answers[1].text}" name="answer" required>
       <span>${dataArray[questionNum].answers[1].text}</span>
       </label>
       <label class="answerChoice">
       <input type="radio" value="${dataArray[questionNum].answers[2].text}" name="answer" required>
       <span>${dataArray[questionNum].answers[2].text}</span>
       </label>
       <label class="answerChoice">
       <input type="radio" value="${dataArray[questionNum].answers[3].text}" name="answer" required>
       <span>${dataArray[questionNum].answers[3].text}</span>
       </label>
       <label class="answerChoice">
       <input type="radio" value="${dataArray[questionNum].answers[4].text}" name="answer" required>
       <span>${dataArray[questionNum].answers[4].text}</span>
       </label>
       <button type="submit" class="submitButton">Submit</button>
       </fieldset>
       </form>
       </div>`;
  }
}

function updateQuestionNumber(){
  console.log('Inside Questions num. questionNum is: ' + questionNum + 'updating...');
  questionNum++;
  console.log('new questionNum is: ' + questionNum);
}

function renderNextQuestion(){
  if (questionNum === 0){
    console.log('inside renderNextQuestion with questionNum 0');
    displayQuestionAndAnswers();
  }
  else{
    console.log('inside renderNextQuestion and questionNum is not 0!')
    $('.submitButton').on('click', function(event){
      updateQuestionNumber();
         displayQuestionAndAnswers();   
    });
}
}

function displayQuestionAndAnswers(){
  console.log('inside displayQuestionAndAnswers');
  propStopped();
  generateQuestion();
  setTimeout(function afterThreeSeconds(){
   $('main').append(generateAnswers());
  }, 3000);
}

function propStopped( event ) {
  var msg = "";
  if ( event.isPropagationStopped() ) {
    msg = "called";
  } else {
    msg = "not called";
  }
  console.log(msg);
}
//Create Quiz
function quizApp(){
  console.log('inside quizApp.');
  //get user answer
  introduceQuiz();
}

$(quizApp);


