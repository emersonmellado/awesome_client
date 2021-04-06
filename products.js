function renderProducts(category) {
    // const apiURL = "https://awesome-server.herokuapp.com/api/products/?category=" + category;
    const apiURL = "http://localhost:3000/api/products/?category=" + category;
    fetch(apiURL)
        .then(function (response) {
            return response.json();
        })
        .then(generateHtml);

    function generateHtml(products) {
        const container = document.getElementById('first');
        container.innerHTML = '';
        const list = document.createElement('ul');
        list.classList.add("features");

        if (products.length) {
            products.forEach((product) => {
                const entry = document.createElement('li');
                const image = document.createElement('img');
                const title = document.createElement('h3');
                const description = document.createElement('p');
                const tags = document.createElement('p');
                const categories = document.createElement('p');

                image.src = product.image;
                description.innerHTML = product.short_description
                tags.innerHTML = "Tags: " + product.tags
                categories.innerHTML = "Categories: " + product.category

                title.innerHTML = product.name;

                entry.appendChild(image)
                entry.appendChild(title)
                entry.appendChild(description)
                entry.appendChild(tags)
                entry.appendChild(categories)

                list.appendChild(entry);
            })
        } else {
            const entry = document.createElement('li');
            const title = document.createElement('h3');
            title.innerHTML = "No products in this category";
            entry.appendChild(title);
            list.appendChild(entry);
        }
        container.appendChild(list);
    }
}
var urlParams = new URLSearchParams(window.location.search);
renderProducts(urlParams.get('category'));