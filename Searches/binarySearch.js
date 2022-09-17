const list = [1,3,5,7,9]

const binarySearch = (list, target) => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (list[mid] === target) {
          return mid;
      } else if (list[mid] < target) {
          low = mid + 1;
      } else {
          high = mid - 1;
      }
  }
// target wasn't found
  return ("target wasn't found");
}

console.log(binarySearch(list, 3)) // => 1
console.log(binarySearch(list, -1)) // => "target wasn't found"
