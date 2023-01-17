import readlineSync from 'readline-sync';
import askNameAndHellow from './cli.js';

export default (gameCondition, questions, rightAnswers) => {
  const scoreForWin = 3;
  const maxRounds = 1;
  const userName = askNameAndHellow();

  console.log(gameCondition);

  let currentRound = 0;
  let userScore = 0;
  let currentQuestion = 0;
  let userAnswer;

  while (currentRound < maxRounds && userScore < scoreForWin) {
    currentQuestion += 1;

    console.log(`Question: ${questions[currentQuestion - 1]}`);

    userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswers[currentQuestion - 1].toString()) {
      console.log('Correct!');
      userScore += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer. Correct answer was \
'${rightAnswers[currentQuestion - 1]}'.`);
      console.log(`Let's try again, ${userName}!`);
      userScore = 0;
      currentRound += 1;
    }
  }

  if (userScore === scoreForWin) {
    console.log(`Congratulations, ${userName}!`);
  }
};
