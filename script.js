
const phrases = [
    "Hello, I'm a new graduate student in Computer Science.",
    "This is a brief introduction to who I am."
  ];
  
  const el = document.getElementById("typed-text");
  let i = 0, j = 0, isDeleting = false;
  
  function type() {
    const current = phrases[i];
    el.textContent = current.substring(0, j);
  
    if (!isDeleting && j < current.length) {
      j++;
    } else if (isDeleting && j > 0) {
      j--;
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) i = (i + 1) % phrases.length;
    }
  
    const speed = isDeleting ? 50 : 70;
    setTimeout(type, speed);
  }
  
  type();
  
  
  
  const aboutText = "Hello, my name is Giovani Siqueira da Silva. I'm currently a Computer Science student at ATITUS. I'm seeking to expand my knowledge and experience in the field of back-end and front-end programming. I don't have professional experience in the area yet, and I'm actively looking for a job opportunity to start my career in the computing field.";
  
  const aboutEl = document.getElementById("about-typing");
  let k = 0;
  
  function typeAbout() {
    if (k < aboutText.length) {
      aboutEl.textContent += aboutText[k];
      k++;
      setTimeout(typeAbout, 30);
    }
  }
  
  typeAbout();