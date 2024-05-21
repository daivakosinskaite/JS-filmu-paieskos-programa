
import ajaxService from "./ajaxService.js";
import renderMovieData from "./renderMovieData.js";

const searchCode = () => {
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        const searchTerm = document.querySelector(".term").value;
        ajaxService(searchTerm)
            .then(result => renderMovieData(result))
            .catch(error => console.error('Error:', error));
    });
};

export default searchCode;
