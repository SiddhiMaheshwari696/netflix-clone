console.log("Netflix Clone Running 🚀");

/* -----------------------------
   🔍 SEARCH FUNCTION
----------------------------- */

document.addEventListener("DOMContentLoaded", () => {

    const search = document.getElementById("search");
    const movies = document.querySelectorAll(".movie");

    if (search) {
        search.addEventListener("input", (e) => {
            let value = e.target.value.toLowerCase();

            movies.forEach(movie => {
                let title = movie.querySelector("h3")?.innerText?.toLowerCase();

                if (title && title.includes(value)) {
                    movie.style.display = "block";
                } else {
                    movie.style.display = "none";
                }
            });
        });
    }

});


/* -----------------------------
   🎬 CLICK → TRAILER OPEN
----------------------------- */

document.querySelectorAll(".movie").forEach(movie => {

    movie.addEventListener("click", () => {

        let title = movie.querySelector("h3")?.innerText;

        if (title) {
            window.open(
                `https://www.youtube.com/results?search_query=${title}+trailer`,
                "_blank"
            );
        }

    });

});

const apiKey = "bb960dfa";

// GET MOVIES
async function getMovies(search) {
  if (!search) return;

  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`
  );

  const data = await res.json();

  if (data.Response === "False") {
    document.querySelector(".row").innerHTML = "<p>No movies found</p>";
    return;
  }

  displayMovies(data.Search);
}

// DISPLAY MOVIES
function displayMovies(movies) {
  const row = document.querySelector(".row");
  row.innerHTML = "";

  movies.forEach(movie => {
    const div = document.createElement("div");
    div.classList.add("movie");

    const poster =
      movie.Poster !== "N/A"
        ? movie.Poster
        : "https://via.placeholder.com/200x300?text=No+Image";

    div.innerHTML = `
      <img src="${poster}" alt="${movie.Title}">
      <div class="info">
        <h3>${movie.Title}</h3>
      </div>
    `;

    row.appendChild(div);
  });
}

// SEARCH BAR
const input = document.querySelector("input");

let timeout;
input.addEventListener("input", (e) => {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    getMovies(e.target.value);
  }, 500);
});
