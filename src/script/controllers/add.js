window.onload = function(){
  const form = document.querySelector('.form-add');
  const overlay = document.getElementById('overlay');
  
  document.getElementById('btn-add-form').addEventListener('click',function(){
    form.classList.toggle('active');
    if(form.classList.contains('active')){
      overlay.classList.toggle('active');
    }
  });

  overlay.addEventListener('click',function(){
    this.classList.remove('active');
    form.classList.remove('active');
  });
}

// const money = value => {
//   const formater = Intl.NumberFormat('pt-BR', {
//     maximumFractionDigits: 2,
//     minimumFractionDigits: 2
//   });
  
//   return 'R$' + formater.format(value);
// };

// const render = (template, ...args) => {
//   const virtal = document.createElement('div')

//   virtal.innerHTML = template.replace(/\$\d*/g, variable => {
//     const index = + variable.replace('$', '');
//     return args[index];
//   });

//   return virtal.children[0];
// };
