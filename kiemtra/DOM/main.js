const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];



const randomAnswerButton = document.getElementById('btn');
randomAnswerButton.addEventListener('click', randomizeAnswers);
function randomizeAnswers() {
  const quizItems = document.querySelectorAll('.quiz-item');
  
  quizItems.forEach((quizItem) => {
    const answerItems = quizItem.querySelectorAll('.quiz-answer-item');

    const randomIndex = Math.floor(Math.random() * answerItems.length);

    answerItems.forEach((answerItem) => {
      const radioButton = answerItem.querySelector('input[type="radio"]');
      radioButton.checked = false;
    });

    const randomAnswerItem = answerItems[randomIndex];
    const randomRadioButton = randomAnswerItem.querySelector('input[type="radio"]');
    randomRadioButton.checked = true;
  });
}

