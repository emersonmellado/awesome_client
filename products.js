function renderProducts() {
    const apiURL = "https://awesome-server.herokuapp.com/api/products";
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

        // <li>
        //     <span class="icon solid major style1 fa-code"></span>
        //     <h3>Ipsum consequat</h3>
        //     <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
        // </li>

        products.forEach((product) => {
            const entry = document.createElement('li');
            const image = document.createElement('img');
            const title = document.createElement('h3');
            const description = document.createElement('p');
            image.src=product.image;
            description.innerHTML = product.short_description

            title.innerHTML = product.name;

            entry.appendChild(image)
            entry.appendChild(title)
            entry.appendChild(description)

            list.appendChild(entry);
        })

        container.appendChild(list);
    }
}
renderProducts();