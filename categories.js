function renderCategories() {
    const apiURL = "https://awesome-server.herokuapp.com/api/categories";
    fetch(apiURL)
        .then(function (response) {
            return response.json();
        })
        .then(generateHtml);

    function generateHtml(categories) {
        const container = document.getElementById('nav');
        container.innerHTML = '';
        const list = document.createElement('ul');

        categories.forEach((category) => {
            const entry = document.createElement('li');
            entry.innerHTML = category.name;
            list.appendChild(entry);
        })

        container.appendChild(list);
    }
}
renderCategories();