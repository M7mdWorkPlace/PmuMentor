const mentors = [
  { name: "Ahmad", major: "Computer Science", interest: "AI" },
  { name: "Sara", major: "Software Engineering", interest: "Web Development" },
  { name: "Fahad", major: "Information Technology", interest: "Networking" },
  { name: "Lina", major: "Computer Science", interest: "Databases" }
];

function searchMentors() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  const filtered = mentors.filter(m =>
    m.major.toLowerCase().includes(query) ||
    m.interest.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    resultsDiv.innerHTML = "<p>No mentors found.</p>";
    return;
  }

  filtered.forEach(m => {
    const p = document.createElement("p");
    p.textContent = `${m.name} — ${m.major} (${m.interest})`;
    resultsDiv.appendChild(p);
  });
}
