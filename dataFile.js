var model = {
    currentQuestion: 0,
    totalWeight: 0
};

const results = [
    {
        min:0,
        max:5,
        distro: 'Ubuntu',
        text: '$ I\'m easy-going and enjoying life. I have the attitude to stay cheerful no matter what, and count on the support of many like me to see me through the tough times. I\'m big on gaming and entertainment, and small on sweat. You\'ll always find me out of the way of the bustle of life, because I always find the best place to go and stay there. I\'m also rather easy to please.',
    },
    {
        min:6,
        max:11,
        distro: 'Redhat',
        text: '$ I\'m a steady learner. I can have fun like anybody else, but it\'s not a priority. I\'m also a steadfast worker proceeding at a moderate pace. I do appreciate media a lot, though, and probably have all the albums by at least one band and/or at least one boxed set of DVDs. I\'m a creative force to be reckoned with. I\'m also pretty easy-going.',
    },
    {
      min:12,
      max:17,
      distro: 'SlackWare',
      text: '$ I\'m extremely self-sufficient. I may not play games much and I may tune out entertainments, but I can work like the blazes and to me, creating is a game in itself. I am compelled by passion to push through projects with a drive unmatched by most. I am a master of creativity, but I also have to be in charge of my circumstances.',
    },
    {
      min:18,
      max:23,
      distro: 'Mandriva',
      text: '$ I look for the quickest way to learn with the minimum of effort. I\'m a hardcore gamer and a pretty avid media fan. I can whip up a mean batch of work or create a substantial design when duty calls, but I like to get my rest, too. I keep up with the crowd without trying to get ahead. I usually look for the most comfortable set of options in life.',
    }
];

const dataArray = [ 
    { 
        question: '$ How patient are you in learning?', 
        answers: [ 
            {
                text: 'I want life to have one big EASY button.', 
                weight: 1,
                feedback: 'Some Feedback 1' 
            }, 
            {
                text: 'The reasonably minimum learning I get away with is fine. by me.',
                weight: 2,
                feedback: 'Some Feedback 2' 
            },
            {
                text: 'I pride myself on my attack of difficult subjects.', 
                weight: 5,
                feedback: 'Some Feedback 3' 
            },
            {
                text:'I prefer the extensive training of Zen Master before I venture out into the world.',
                weight: 4,
                feedback: 'Some Feedback 4' 
            }
        ], 
        alt: 'tent icon' 
    }, 
    
    { 
      question: '$ How much of a gamer are you?', 
      answers: [
            { 
              text: 'Games are my whole life!', 
               weight: 6,
               feedback: 'Some Feedback 1'
            },
            {
               text:'I just wanna have fun!', 
               weight: 1,
               feedback: 'Some Feedback 2'
            },
            {
               text: 'Meh, games are OK, I guess.', 
               weight: 2,
               feedback: 'Some Feedback 3'
            },
            {
               text: 'The only time I game is when I play Tetris while waiting for some other process to finish.' ,
               weight: 5,
               feedback: 'Some Feedback 4'
            }
    ], 
    alt: 'shield for 10 essentials icon' 
  },
  { 
      question: '$ Are you a programmer, or do you do anything else involving code?', 
      answers: [
            { 
              text: 'I am the most dangerous hacking ninja in my town', 
               weight: 4,
               feedback: 'Some Feedback 1'
            },
            {
               text:'I program in my sleep, I like it so much.', 
               weight: 7,
               feedback: 'Some Feedback 2'
            },
            {
               text: 'Yes, I have coded some, but mostly for the web pages and for the odd shell script', 
               weight: 2,
               feedback: 'Some Feedback 3'
            },
            {
               text: 'Programming? I thought software grew on trees' ,
               weight: 1,
               feedback: 'Some Feedback 4'
            }
    ], 
    alt: 'shield for 10 essentials icon' 
  },
  { 
    question: '$ How much work do you prefer to do?', 
    answers: [
          { 
            text: 'Can I just stay in a coma and let life happen around me?', 
             weight: 1,
             feedback: 'Some Feedback 1'
          },
          {
             text:'Be quiet, I\'m trying to sleep in', 
             weight: 2,
             feedback: 'Some Feedback 2'
          },
          {
             text: 'Up at dawn, cup of coffee in hand, and ready to invade Russia by seven.', 
             weight: 6 ,
             feedback: 'Some Feedback 3'
          },
          {
             text: 'You mean there\'s something else to life besides work?', 
             weight: 3,
             feedback: 'Some Feedback 4'
          }
  ], 
  alt: 'shield for 10 essentials icon' 
}
];
