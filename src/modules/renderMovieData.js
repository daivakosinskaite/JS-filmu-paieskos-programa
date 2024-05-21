const renderMovieData = (data) => {
    const cardBody = document.querySelector(".card-body");

    if (data.Response === "False") {
        cardBody.innerHTML = `<p>${data.Error}</p>`;
        return;
    }

    const movieId = data.imdbID;
    const likeCountFromStorage = localStorage.getItem(`likeCount_${movieId}`) || 0;

    cardBody.innerHTML = `
        <div class="row">
            <div class="col-md-4">
                <img src="${data.Poster}" alt="${data.Title} poster" class="img-fluid">
            </div>
            
            <div class="col-md-8"> 
                <h2>${data.Title} (${data.Year})</h2>
                <p><strong>Actors:</strong> ${data.Actors}</p>
                <p><strong>Director:</strong> ${data.Director}</p>
                <p><strong>Plot:</strong> ${data.Plot}</p>
                <p><strong>Writer:</strong> ${data.Writer}</p>
                <p><strong>Runtime:</strong> ${data.Runtime}</p>
                <p><strong>imDB Rating:</strong> ${data.imdbRating}</p>
                <p><strong>Release Date:</strong> ${data.Released}</p>
                <p><strong>Genre:</strong> ${data.Genre}</p>
                <button id="like-btn" class="btn btn-outline-danger">
                    ❤ <span id="like-count">${likeCountFromStorage}</span>
                </button>
            </div>
        </div>
    `;
// pridedamas like mygtukas
    const likeBtn = cardBody.querySelector('#like-btn');
    const likeCount = cardBody.querySelector('#like-count');
// like mygtukai issaugomi local storage
    likeBtn.addEventListener('click', () => {
        let count = parseInt(likeCount.textContent);
        count++;
        likeCount.textContent = count;
        localStorage.setItem(`likeCount_${movieId}`, count);
    });
};

export default renderMovieData;


