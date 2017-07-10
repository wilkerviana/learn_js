
  // -> scope 2017
  var nbaChampions = 'Golden State Warriors';
  console.log(nbaChampions);

  // let - variable scope -> scope 2016
  {
    let nbaChampions = 'Cleveland Cavaliers';
    console.log(nbaChampions);
  }

  // const variable unchanging but properties of your object can be changed
  const mvp = {
    okc: 'Russell Westbrook',
    spurs: 'Kawaii Leonard',
    rockets: 'James Harden'
  } 
    // What's your MVP?
  console.log(mvp.spurs)
  mvp.spurs = 'Tony Parker';
  console.log(mvp.spurs)

  // temporal dead zone -> just var hoisted
  console.log(myTeam);
  var myTeam = 'Los Angeles Lakers'

  const teamsNba = ['Los Angeles Lakers','Chicago Bulls','Cleveland Cavaliers'];

  // ES5
  const myFavorites2 = teamsNba.filter(function(name){
    return name === 'Chicago Bulls';
  }).map(function(name){
    return `Michael Jordan is ${name}`;
  });
  
  // ES6 
  const myFavorites = teamsNba
                        .filter(name => name === 'Los Angeles Lakers')
                        .map(name => `My team is ${name}`);
  
  console.log(myFavorites);


window.onload = function(){
  // events ES5
  const btn = document.getElementById('btn-form');
  btn.addEventListener('click',function(event){
    event.preventDefault();
    console.log(this);
  });
  
  // lexical this
  const sandwich = {
    bread: 'australian',
    cheese: 'cheddar',

    prepare:function(){
      return `I want a sandwich with ${this.bread} bread and ${this.cheese} cheese!`;
    },

    make: function(){
      console.log(this.prepare());
    }
  }

  const button = document.getElementById('btn-form');
  button.addEventListener('click', (event) => {
    sandwich.make();
  });

  let will = 'Wilker';

  const person = {
    will,

    hello: function(){
      console.log(`My name is ${will}`);
    }
  }
  console.log(person.hello());
  
}