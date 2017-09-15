var config = {
  apiKey: "AIzaSyDEZwA-systsIOMjVSh1Hdjcjm_AIOP0AA",
  authDomain: "mercarrinho.firebaseapp.com",
  databaseURL: "https://mercarrinho.firebaseio.com",
  projectId: "mercarrinho",
  storageBucket: "",
  messagingSenderId: "68947697989"
};

var app = firebase.initializeApp(config);

var database = app.database()

database.goOnline()

module.exports = database;
