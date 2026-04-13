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