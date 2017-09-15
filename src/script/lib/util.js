const render = (template, ...args) => {
  const virtual = document.createElement('div')

  virtual.innerHTML = template.replace(/\$\d*/g, variable => {
    const index = + variable.replace('$', '');
    return args[index] ;
  });

  return virtual.children[0];
};

exports.render = render
