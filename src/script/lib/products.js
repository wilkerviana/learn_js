const { render } = require('./util.js');
const database = require('./database.js');

const load = () => {
  database.ref('/products/').on('value', snapshot => {
    const products = snapshot.val(),
          template = document.querySelector('#template-product'),
          container = document.querySelector('.product-container');

    container.innerHTML = null;

    Object.keys(products).forEach(id => {
      const product = products[id];

      container.appendChild(
        render(template.innerHTML,
          product.name,
          product.category,
          product.quantity
        )
      );
    });
  })
};

exports.load = load;
