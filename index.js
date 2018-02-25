let questionNum = 0;

//also check for other invalid keys pressed
//check for this. notation 
//check for uppercase letter pressed 
function getUserAnswer(){
  let feedback = 'hi'; //populate for testing
  console.log('inside getUserAnswer');
  $(document).on('keypress', function (event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    console.log('key pressed!! ' + event.keyCode);
    if (event.which == 121 || event.which == 13){
      console.log('it worked');
      $('.user-feedback').append("Let's Go!");}
    else
      console.log('it didn\'t work');
    $('.user-feedback').append("Goodbye.");
      //$('.user-feedback').text(`$ Goodbye.`);
  }
);}

//Create Quiz
function createQuiz(){
//get user answer
getUserAnswer();
//generate qustion form
//generateQuestion();
console.log('inside createQuiz.')

}
$(createQuiz);
