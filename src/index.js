// You should implement your task here.
//
// const towel=[
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ],
// ]

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) return [];
    return matrix
        .map((row, index) => {
            if (index % 2 !== 0) {
                return [...row].reverse();
            }
            return row;
        })
        .flat();
}
