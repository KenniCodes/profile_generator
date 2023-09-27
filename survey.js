const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let answers = [];

rl.question("What is your preferred name?", (answer1) => {
  answers.push(answer1);
    rl.question("What's an activity you like doing?", (answer2) => {
      answers.push(answer2);
        rl.question("What genre of music do you listen to?", (answer3) => {
          answers.push(answer3);
          rl.question("What's your favourite snack?", (answer4) => {
            answers.push(answer4);
             rl.question("What's your favourite streaming service?", (answer5) => {
              answers.push(answer5);
                rl.question("Where would you travel to right now if you had the resources?", (answer6) => {
                  answers.push(answer6);
                    const profileBio = `I go by ${answers[0]}. One activity I do on my free time is ${answers[1]}. `
                                      + `I listen to ${answers[2]} everyday. While I'm scrolling through ${answers[4]} I like to eat ${answers[3]}. `
                                      + `If I had all the resources needed to travel anywhere in the world right now, I would go to ${answers[5]}.`
                    console.log(profileBio);

                   rl.close();
               }); 
              });
            });
          });
        });
      });
