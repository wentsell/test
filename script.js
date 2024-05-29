let currentStep = 1;
const totalSteps = 4;

function nextStep(step) {
    currentStep = step;

    // Hide all steps
    const steps = document.querySelectorAll('.survey-step');
    steps.forEach(step => step.classList.remove('active'));

    // Show the current step
    document.getElementById(`step-${step}`).classList.add('active');

    // Update progress bar
    updateProgressBar();
}

function prevStep(step) {
    currentStep = step;

    // Hide all steps
    const steps = document.querySelectorAll('.survey-step');
    steps.forEach(step => step.classList.remove('active'));

    // Show the current step
    document.getElementById(`step-${step}`).classList.add('active');

    // Update progress bar
    updateProgressBar();
}

function updateProgressBar() {
    const progress = document.getElementById('progress');
    const progressPercentage = (currentStep - 1) / (totalSteps - 1) * 100;
    progress.style.width = `${progressPercentage}%`;
}

function submitSurvey() {
    // Collect answers
    const rating = document.getElementById('question-1').value;
    const answer2 = document.getElementById('question-2').value;

    // Here you can send the answers to the server or log them
    console.log('Rating:', rating);
    console.log('Answer 2:', answer2);

    // Show a thank you message or redirect to another page
    alert('Dziękujemy za wypełnienie ankiety!');
}
