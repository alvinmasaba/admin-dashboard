// Selects the projects display.
const projectsDisplay = document.querySelector(".project-cards-display");

let i = 1;

function createNewProject() {
  const card = document.createElement('div');
  card.setAttribute("class", "card");
  card.classList.add("project-card");
  card.innerHTML =
    `<h1>Title</h1><p class='project-card-text-${i}'></p><div class='buttons'<img src='./icons/star-outline.svg' alt='favorite icon'><img src='./icons/eye-plus-outline.svg' alt='watch icon'><img src='./icons/share-variant.svg' alt='share icon'></div>`;
  projectsDisplay.appendChild(card);
  const cardText = document.querySelector(`.project-card-text-${i}`);
  i++;
  cardText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente in, nesciunt at omnis labore veritatis id rem doloremque necessitatibus minima? Doloremque atque consequuntur, molestias tenetur laudantium natus quia earum.";
};
