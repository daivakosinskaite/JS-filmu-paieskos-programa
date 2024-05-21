const ajaxService = (term) => {
    const url = "http://www.omdbapi.com/?t=";  //duomenu bazes adresas
    const apiKey = "28be5430";  // prisijungimo raktas
    return fetch(`${url}${term}&apikey=${apiKey}`)
        .then(response => response.json());
};

export default ajaxService;
