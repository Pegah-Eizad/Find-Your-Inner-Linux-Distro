var model = {
    currentQuestion: 0,
    totalWeight: 0
};

const results = [
    {
        min:0,
        max:10,
        distro: 'Ubuntu'
    },
    {
        min:11,
        max:20,
        distro: 'Redhat'
    }
]

const dataArray = [ 
    { 
        question: 'How patient are you in learning?', 
        answers: [ 
            {
                text: 'I want life to have one big EASY button.', 
                weight: 5
            }, 
            {
                text: 'The reasonably minimum learning I get away with is fine. by me.',
                weight: 2
            },
            {
                text: 'I don\'t mind a challenge every now and then.', 
                weight: 7
            },
            {
                text: 'I pride myself on my attack of difficult subjects.', 
                weight: 4
            },
            {
                text:'I prefer the extensive training of Zen Master before I venture out into the world.',
                weight:8
            }
        ], 
        feedback: 'Some Feedback 1', 
        alt: 'tent icon' 
    }, 
    
    { 
      question: 'How much of a gamer are you?', 
      answers: [
            { 
              text: 'Games are my whole life!', 
               weight: 5
            },
            {
               text:'I just wanna have fun!', 
               weight: 2
            },
            {
               text: 'Meh, games are OK, I guess.', 
               weight: 7
            },
            {
               text: 'Sure, I like some games as long as they don\'t get in my way', 
               weight: 4
            },
            {
               text: 'The only time I game is when I play Tetris while waiting for some other process to finish.' ,
               weight: 8
            }
    ], 
    feedback: 'feedback', 
    icon: 'https://i.imgur.com/iQ0FBhB.png', 
    alt: 'shield for 10 essentials icon' 
  } 

];
