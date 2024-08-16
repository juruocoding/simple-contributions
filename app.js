fetch("cards.json")
  .then((response) => response.json())
  .then((data) => {
    const cardsContainer = document.getElementById("cards");
    data.cards.forEach((contributor) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <h3>${contributor.name}</h3>
        <p>${contributor.profession}</p>
        <p>${contributor.quote}</p>
        <p><a href="${contributor.github}" target="_blank">GitHub</a></p>
        <p><a href="${contributor.linkedin}" target="_blank">LinkedIn</a></p>
        <p><a href="${contributor.email}" target="_blank">Email</a></p>
      `;
      cardsContainer.appendChild(card);
    });
  })
  .catch((error) => console.error("Error fetching contributors:", error));
