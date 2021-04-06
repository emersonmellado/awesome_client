function render() {
    const apiURL = "https://awesome-server.herokuapp.com/api/categories";
    fetch(apiURL)
        .then(function (response) {
            return response.json();
        })
        .then(renderCategories);

    function renderCategories(categories) {
        const container = document.getElementById('categories');
        container.innerHTML = '';
        const list = document.createElement('ol');

        categories.forEach((category) => {
            const entry = document.createElement('li');
            entry.innerHTML = category.name;
            list.appendChild(entry);
        })

        container.appendChild(list);
    }
}
render();