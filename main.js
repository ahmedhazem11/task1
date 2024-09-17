// List of questions with correct answers
const questions = [
    { question: "What is the capital of Egypt?", answer: "Cairo" },
    { question: "What is the largest planet in the solar system?", answer: "Jupiter" },
    { question: "Who discovered America?", answer: "Columbus" },
    { question: "How many days are in a leap year?", answer: "366" },
    { question: "What animal is known as the 'Ship of the Desert'?", answer: "Camel" },
    { question: "How many continents are there in the world?", answer: "7" },
    { question: "What is the fastest land animal?", answer: "Cheetah" },
    { question: "What is the first mosque built in Islam?", answer: "Quba" },
    { question: "What is the name of the sea between Saudi Arabia and Egypt?", answer: "Red Sea" },
    { question: "Who is the founder of Algebra?", answer: "Al-Khwarizmi" }
  ];
  
  // Select 5 random questions
  function getRandomQuestions(questions) {
    return questions.sort(() => 0.5 - Math.random()).slice(0, 5);
  }
  
  // Counters for correct and wrong answers
  let correctAnswers = 0;
  let wrongAnswers = 0;
  
  // Ask the user questions and check answers
  function askQuestions() {
    const randomQuestions = getRandomQuestions(questions);
  
    randomQuestions.forEach((q, index) => {
      const userAnswer = prompt(`Question ${index + 1}: ${q.question}`);
  
      if (userAnswer.trim().toLowerCase() === q.answer.toLowerCase()) {
        alert("Correct answer!");
        correctAnswers++;
      } else {
        alert(`Wrong answer! The correct answer is: ${q.answer}`);
        wrongAnswers++;
      }
    });
  
    // Calculate the success percentage
    const successRate = (correctAnswers / randomQuestions.length) * 100;
  
    // Show the final result
    alert(`Number of correct answers: ${correctAnswers}`);
    alert(`Number of wrong answers: ${wrongAnswers}`);
    alert(`Success rate: ${successRate}%`);
  
    // Check if the user passed or failed
    if (successRate > 50) {
      alert("Congratulations! You passed.");
    } else {
      alert("Sorry, you failed.");
    }
  }
  
  // Start the quiz
  console.log( askQuestions());
  