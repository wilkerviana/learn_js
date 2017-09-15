const database = require('./lib/database.js');
const { load: loadProducts } = require('./lib/products.js');

// database.ref('/version/').once('value')
//   .then(function (snapshot) {
//     console.log(snapshot.val())
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// database.ref('/version/').set(2);

window.addEventListener('load', () => {
  loadProducts();

  const form = document.querySelector('.form-add'),
        overlay = document.getElementById('overlay'),
        btnSave = document.querySelector('.btn-save-form'),
        btnAdd = document.getElementById('btn-add-form');
  
  const hide = () => {
    overlay.classList.remove('active');
    form.classList.remove('active');
  };

  btnAdd.addEventListener('click', () => {
    form.classList.toggle('active');

    if (form.classList.contains('active'))
      overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', hide);

  btnSave.addEventListener('click', event => {
    event.preventDefault();

    const name = document.querySelector('[data-id="product-name"]').value,
          category = document.querySelector('[data-id="product-category"]').value,
          quantity = document.querySelector('[data-id="product-quantity"]').value;
    
    database.ref('/products/').push({name, category, quantity});

    hide();
  });
});
