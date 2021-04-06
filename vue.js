var baseApiUrl = "https://awesome-server.herokuapp.com/api/"; //http://localhost:3000/api/
var categories_list = new Vue({
    el: '#categories_app',
    data() {
        return {
            categories: null
        }
    },
    mounted() {
        axios
            .get(`${baseApiUrl}categories`)
            .then(response => (this.categories = response.data))
    }
})

var products_list = new Vue({
    el: '#products_app',
    data() {
        return {
            products: []
        }
    },
    mounted() {
        var urlParams = new URLSearchParams(window.location.search);
        axios
            .get(`${baseApiUrl}products?category=${urlParams.get('category')}`)
            .then(response => (this.products = response.data))
    }
})