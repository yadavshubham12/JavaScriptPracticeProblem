function powerOfTwo(n) {
    for (var i = 0; i <= n; i++) {
      console.log(Math.pow(2, i));
    }
  }
  
  var n = parseInt(process.argv[2]);
  powerOfTwo(n);
  