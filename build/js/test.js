
const fetchData = () => fetch('https://raw.githubusercontent.com/amerezhany/astound-test-task/master/products.json')
  .then(response => response.json())
  .catch(console.error);

const changeProduct = (product) => {
  product.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target)
  })
};

const createProduct = (id, product) => {
  const products = document.querySelectorAll('.js-product');
  const image = document.createElement('img');
  const title = document.createElement('span');

  products.forEach(myProduct => {
    if (myProduct.dataset.sku === id) {
      image.src = product.color[0].image;
      image.alt = product.color[0].title;
      title.innerHTML = product.color[0].title;
      myProduct.getElementsByTagName('a')[0].appendChild(image);
      myProduct.getElementsByTagName('div')[0].appendChild(title);

      changeProduct(myProduct);
    }
  });
};

fetchData().then(data => {
  Object.entries(data).forEach(([key, value]) => {
    createProduct(key, value)
  })
});

