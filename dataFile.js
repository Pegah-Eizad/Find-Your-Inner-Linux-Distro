var model = {
    currentQuestion: 0,
    totalWeight: 0
};

const results = [
    {
        min:10,
        max:17,
        distro: 'Ubuntu',
        text: '$ You are easy-going and enjoying life. You have the attitude to stay cheerful no matter what, and count on the support of others to get you through the tough times. You\'re big on gaming and entertainment, and small on sweat. You\'ll always find yourself out of the way of the bustle of life, because you always find the best place to go and stay there. You\'re also rather easy to please.',
    },
    {
        min:18,
        max:25,
        distro: 'Redhat',
        text: '$ You\'re a steady learner. You can have fun like anybody else, but it\'s not a priority. You\'re also a steadfast worker proceeding at a moderate pace. You appreciate media a lot, though, and probably have all the albums by at least one band and/or at least one boxed set of DVDs. You\'re a creative force to be reckoned with. You\'re also pretty easy-going.',
    },
    {
      min:26,
      max:33,
      distro: 'SlackWare',
      text: '$ You\'re extremely self-sufficient. you may not play games much and you may tune out entertainments, but you can work like the blazes and to you, creating is a game in itself. You are compelled by passion to push through projects with a drive unmatched by most. You are a master of creativity, but you also have to be in charge of my circumstances.',
    },
    {
      min:34,
      max:41,
      distro: 'Mandriva',
      text: '$ You look for the quickest way to learn with the minimum of effort. You\'re a hardcore gamer and a pretty avid media fan. You can whip up a mean batch of work or create a substantial design when duty calls, but you like to get your rest, too. You keep up with the crowd without trying to get ahead. You usually look for the most comfortable set of options in life.',
    }
];

const dataArray = [ 
    { 
        question: '$ How patient are you in learning?', 
        answers: [ 
            {
                text: 'I want life to have one big EASY button.', 
                weight: 1,
                feedback: 'In the Linux command-line, \'cd\' is used to change directories: \
                you can traverse multiple directories with cd like this: cd /usr/local/share/man. \
                Yep, it\'s that easy! See, Linux is for lazy people!'

            }, 
            {
                text: 'The reasonably minimum learning I get away with is fine. by me.',
                weight: 2,
                feedback: 'In the Linux command-line, \'man\' is used to display the manual page for any command.\
                           This is reasonably minimum effort for an unreasonable amount of power!' 
            },
            {
                text: 'I pride myself on my attack of difficult subjects.', 
                weight: 4,
                feedback: 'If you get a kick out of difficult subjects, \
                           try getting a grep *ehem* grip on the linux \'grep\' command.' 
            },
            {
                text:'I prefer the extensive training of Zen Master before I venture out into the world.',
                weight: 3,
                feedback: 'Watch out! The Zen master can fail you programmatically by putting an [exit] command \
                           in your shell script with a return value of anything other than 0.' 
            }
        ], 
        alt: 'tent icon' 
    }, 
    
    { 
      question: '$ How much of a gamer are you?', 
      answers: [
            { 
              text: 'Games are my whole life!', 
               weight: 4,
               feedback: 'Good news for nerdy 8 year old Linux fans: Minecraft is supported by Linux.'
            },
            {
               text:'I just wanna have fun!', 
               weight: 1,
               feedback: 'You can play Team Fortress 2 on Linux. So fun!'
            },
            {
               text: 'Meh, games are OK, I guess.', 
               weight: 2,
               feedback: 'Try playing Half-Life on Linux. You\'ll come back a changed...Kernel.'
            },
            {
               text: 'The only time I game is when I play Tetris while waiting for some other process to finish.' ,
               weight: 3,
               feedback: 'Let\'s just say your graphics are not your most attractive feature.'
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
               feedback: 'You can hack string manipulation in Linux with Sed and Awk.'
            },
            {
               text:'I program in my sleep, I like it so much.', 
               weight: 3,
               feedback: 'Did you know you can pause shell scripts for a quick nap with the \'sleep\' command? \
                          "sleep 1s" for example, will pause your script for 1 second.'
            },
            {
               text: 'Yes, I have coded some, but mostly for the web pages and for the odd shell script', 
               weight: 2,
               feedback: 'Did you know? The linux vi aditor can speed up writing and traversing through shell scripts.'
            },
            {
               text: 'Programming? I thought software grew on trees' ,
               weight: 1,
               feedback: 'Let\'s just...go to the next question...'
            }
    ]
  },
  { 
    question: '$ How much work do you prefer to do?', 
    answers: [
          { 
            text: 'Can I just stay in a coma and let life happen around me?', 
             weight: 1,
             feedback: 'Ok! but at least enable automatic updates!'
          },
          {
             text:'Be quiet, I\'m trying to sleep in', 
             weight: 2,
             feedback: 'Use can use the cron job-scheduler to run your tasks, while you catch all the Z\'s!'
          },
          {
             text: 'Up at dawn, cup of coffee in hand, and ready to invade Russia by seven.', 
             weight: 4,
             feedback: 'If you\'re going to invade Russia, make sure you PUTIN some kernel security with security enhanced Linux.'
          },
          {
             text: 'You mean there\'s something else to life besides work?', 
             weight: 3,
             feedback: 'Well sometimes you have to stop and ask "who am i". \
                        Try typing that in the command-line, if you ever lose yourself!'
          }
  ]
},
  { 
    question: '$ Are you a media junkie?', 
    answers: [
          { 
            text: 'This quiz is the only non-audio/video activity i\'ve ever done', 
             weight: 1,
             feedback: 'I\'m guessing you might want to know about a little command called: \'du\', for disk usage!'
          },
          {
             text:'I\'m a movie and music snop, with a multimedia collection that spans Gigabytes.', 
             weight: 2,
             feedback: 'Try "gzip"ing your media files to save some space on the disk drives.'
          },
          {
             text: 'I do have a select group of songs and videos which I cannot live without.', 
             weight: 4,
             feedback: 'You might want to "mkdir" for those! That\'s the command-line way of saying make a directory!'
          },
          {
             text: 'Meh, I have a radio and a TV for that.', 
             weight: 3,
             feedback: 'Yeah...your insides might be more Unix, rather than Linux...'
          }
  ]
},
{ 
    question: '$ How fast do you live?', 
    answers: [
          { 
            text: 'Get out of my way! I have work to do!', 
             weight: 3,
             feedback: 'Try making use of aliases for frequently ran commands to go lightning fast!'
          },
          {
             text:'Why hurry? We\'ll get there.', 
             weight: 2,
             feedback: 'I am sensing a little bit of a disk I/O problem!' 
          },
          {
             text: 'I never break a sweat. Ever.', 
             weight: 4,
             feedback: 'Let me guess...you are a lightweight...distro!'
          },
          {
             text: 'I\'m basically a potted plant.', 
             weight: 1,
             feedback: 'Well... this is AWK-ward!'
          }
  ]
},
{ 
    question: '$ How artistic are you?', 
    answers: [
          { 
            text: 'Does doodling on napkins count?', 
             weight: 1,
             feedback: 'You are most likely an enterprise edition, and very expensive!'
          },
          {
             text:'I like a broad canvas to fill sometimes.', 
             weight: 2,
             feedback: 'You sounds like a Redhat -- a distribution that has both open source and enterprise editions.'
          },
          {
             text: 'Mostly my creativity is limited to customizing my environment.', 
             weight: 3,
             feedback: 'Ah...a classic open source!'
          },
          {
             text: 'There\'s nothing I can\'t create. People come to me with design problems all the time', 
             weight: 4,
             feedback: 'You are most likely an open source distribution, free to be how you want to be!'
          }
  ]
},
{ 
    question: '$ How picky are you?', 
    answers: [
          { 
            text: 'I want it my way, or I don\'t want it at all. That\'s why I do everything myself.', 
             weight: 3,
             feedback: 'Linux pros use tweak tools to customize their OS.'
          },
          {
             text:'I\'m pretty spoiled. I like a wide variety of options because I change my mind a lot.', 
             weight: 4,
             feedback: 'There are lots of OS parameters that can be changed after the initial Linux install. \
                        Just don\'t forget to Reboot.'
          },
          {
             text: 'I\'m not too hard to please. Easy does it.', 
             weight: 2,
             feedback: 'Default settings make Linux installations easy-breezy!'
          },
          {
             text: 'I\'ll have what everybody else is having.', 
             weight: 1,
             feedback: 'People like you are the reason why most Linux installations come with default settings.'
          }
  ]
},
{ 
    question: '$ What is your opinion on people?', 
    answers: [
          { 
            text: 'I like people who are expressive and fun.', 
             weight: 3,
             feedback: 'You can make sure only fun people get access to your files by controlling permisisons with "chmod".'
          },
          {
             text:'I tend to not just keep within the community.', 
             weight: 2,
             feedback: 'You can you "SSH" to quickly venture out into another Linux server, if you have the permissions of course!'
          },
          {
             text: 'I love everyone!', 
             weight: 1,
             feedback: 'You can be one person, or you can be many! Switch between users with the "su" command.'
          },
          {
             text: 'It\'s best to go with those you know well', 
             weight: 4,
             feedback: 'You might like to set special permissions for the users on your linux machine. \
                        You can do that, as the super-user of course!'
          }
  ]
},
{ 
    question: '$ What is your fashion sense?', 
    answers: [
          { 
            text: 'I kinda wear ANYTHING!', 
             weight: 3,
             feedback: 'Have it your way. With linux you can use both the console, or the GUI desktop for when you feel a bit more flashy.'
          },
          {
             text:'I go with the latest fashion.', 
             weight: 1,
             feedback: 'You will probably feel most comfortable in the GUI desktop.'
          },
          {
             text: 'I\'m plane, t-shirt and pants, nothing special.', 
             weight: 4,
             feedback: 'You\'d probably feel most comfortable in a console.'
          },
          {
             text: 'Something cool and hip, like a blazer.', 
             weight: 2,
             feedback: 'You would probably feel most comfortable in a customized Linux desktop or console environment.'
          }
  ]
}
];
