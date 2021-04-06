function renderCategories() {
    // const apiURL = "https://awesome-server.herokuapp.com/api/categories";
    const apiURL = "http://localhost:3000/api/categories";
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
            const anchor = document.createElement('a');
            anchor.href="?category=" + category.name;
            anchor.innerHTML = category.name;
            entry.appendChild(anchor);
            list.appendChild(entry);
        })

        container.appendChild(list);
    }
}
renderCategories();