function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  roll = 0;

  return function() {
    return list[roll++];
  };
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 1
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 2
console.log(rollLoadedDie());  // 3
console.log(rollLoadedDie());  // 3
console.log(rollLoadedDie());  // 5
