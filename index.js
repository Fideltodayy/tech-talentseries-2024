const sessions = {
  Monday: [
    {
      title: "Introduction to Cyber Security",
      description: "A deep dive into cyber security.",
    },
    {
      title: "Business Analysis",
      description: "How to approach business analysis.",
    },
  ],
  Tuesday: [
    { title: "Gen AI Insights", description: "Exploring generative AI." },
  ],
  // Add the rest of the days' sessions...
};

function filterByDay(day) {
  const sessionContainer = document.querySelector(".sessions");
  sessionContainer.innerHTML = ""; // Clear existing content

  sessions[day].forEach((session) => {
    const sessionCard = document.createElement("div");
    sessionCard.classList.add("session-card");
    sessionCard.innerHTML = `<h2>${session.title}</h2><p>${session.description}</p>`;
    sessionContainer.appendChild(sessionCard);
  });
}
