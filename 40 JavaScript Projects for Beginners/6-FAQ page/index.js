const questions = document.querySelectorAll('.question')

questions.forEach((question) => {
  const btn = question.querySelector('.question-btn');

  btn.addEventListener('click', () => {

    questions.forEach((item) => {
      // Comparamos que boton no se pulso
        // item  = boton pulsado
        // questino = botones 
      if (item !== question) {
        item.classList.remove('show-text')
      }
    })

    question.classList.toggle("show-text");
  });
});

