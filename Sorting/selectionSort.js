const arr = [5,3,6,2,10]
let count = 0

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let smallestIndex = i
        for (let j = i+1; j < array.length; j++){
            if (array[j] < array[smallestIndex]) {
                smallestIndex = j
            }
            count +=1
        }
        let num = array[i]
        array[i] = array[smallestIndex]
        array[smallestIndex] = num
    }
    return array
}

console.log(selectionSort(arr))
console.log(arr.length) // O (n^2)
console.log('count = ', count)
