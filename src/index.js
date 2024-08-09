
// You should implement your task here.

const towel=[
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
]

const towelSort = (matrix) => {
    return towel.flat().sort((a, b) => a - b)
}

console.log(towelSort(towel))

// module.exports = function towelSort (matrix) {
//   return [];
// }
