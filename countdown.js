var countdownGenerator = function (x) {
  var i = x + 1;

  return function(){
    i -= 1;
    if(i > 0){
      console.log("T-minus", i);
    } else if (i === 0){
      console.log("Blast Off!");
    } else { console.log("Rockets already gone, bub!"); }
  };
};

var countdown = countdownGenerator(10);

countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
