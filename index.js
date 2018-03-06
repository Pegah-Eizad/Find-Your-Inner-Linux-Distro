
let questionNum = 0;

//intro 
function introduceQuiz(){
  console.log('inside introduceQuiz');
  /*
   $('input').keydown(event =>
    $('.output').text(`Key pressed: ${event.key}`)
  );
  */

  $('input').on('keydown', function (event){
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
    //testing
    event.stopPropagation();
    function propStopped( event ) {
    var msg = "";
    if ( event.isPropagationStopped() ) {
      msg = "CALLED";
    } else {
      msg = "NOT CALLED";
    }
    console.log(msg);
  }
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
    $('input').remove();
    //move the shell up
    $('.text-editor-start').addClass('text-editor').removeClass('text-editor-start');
    displayQuestionAndAnswers();
}

function updateQuestionNumber(){
  console.log('UPDATING questionNum. questionNum is: ' + questionNum + 'updating...');
  questionNum++;
  console.log('new questionNum is: ' + questionNum);
}

function renderNextQuestion(){
  console.log('inside renderNextQuestion');
  //event.preventDefault();
  //$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  /*
  $('form').on('Submit', function(e){
    e.preventDefault();
    console.log('DEFAULT PREVENTED');
  });
  */
  $(document).on('click','.submitButton',function(e){

      e.preventDefault();
      console.log('Default Preveted!!!!!');
      updateQuestionNumber();
      displayQuestionAndAnswers();

});
    
}

function displayQuestionAndAnswers(){
  console.log('inside displayQuestionAndAnswers');
  generateQuestion();
  setTimeout(function afterThreeSeconds(){
   $('main').append(generateAnswers());
  }, 2000);
}

function generateQuestion(){
  console.log('testing generateQuestion with questionNUm' + questionNum);
  if (questionNum < dataArray.length) {
     //$('.questions').append(${dataArray[questionNum].question});
     $('div.text-body').append(`<p class="questions">${dataArray[questionNum].question}</p>`);
  }
}
function generateAnswers(){
     //${STORE[questionNumber].question}
     console.log('inside generate answers with questionnum' + questionNum);
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
//Create Quiz
$(document).ready(function(){
  console.log('inside quizApp.');
  introduceQuiz();
  renderNextQuestion();
  //get user answer 
});
