
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
      $('.user-feedback').append("$ Goodbye.");
    }
  }); 
  //alert('Get user answer finished');
}



function generateQuestions(){
  console.log('testing generateQuestions');
  for(let i=0; i<dataArray.length; i++)
  {
     
  }

}

//starts quiz by clearing start page,
//adding quiz elements,
//and generating questions
function startQuiz()
{   
    console.log('inside startQuiz');
    //clear start page 
    $('.user-feedback').remove();
    $('.line-1').remove();
    //move the shell up 
    $('.text-editor-wrap').css({"top":"50px"});
    //Add quiz divs to the page 
    $('.question-div').addClass('question-box');
    setTimeout(function afterOneSecond(){
       $('.penguin-div').addClass('penguin-box');
       //generate questions ?? 
    }, 1000);
}


//Create Quiz
function quizApp(){
  console.log('inside quizApp.');
  //get user answer
  introduceQuiz();
  
}

$(quizApp);



