//DannyWod

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function squared(array) {
  return _.partition(array, function(num){
    return Math.sqrt(num) % 1 === 0;
  });
}

console.log(squared(array));