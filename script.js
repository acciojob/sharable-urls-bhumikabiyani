const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const year = document.getElementById("year").value.trim();

  const params = new URLSearchParams();

  if (name) params.append("name", name);
  if (year) params.append("year", year);

  let baseURL = "https://localhost:8080/";
  let finalURL = baseURL + (params.toString() ? "?" + params.toString() : "");

  document.getElementById("url").textContent = finalURL;
});