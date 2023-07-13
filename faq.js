const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  question.addEventListener('click', function() {
    this.classList.toggle('active');
    const answer = this.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});