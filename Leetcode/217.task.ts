// 217. Contains Duplicate O(n)

function containsDuplicate(nums: number[]): boolean {
  let setOfNums = new Set<number>();

  for (let num of nums) {
    if (setOfNums.has(num)) {
      return true;
    } else {
      setOfNums.add(num);
    }
  }
  return false;
}
