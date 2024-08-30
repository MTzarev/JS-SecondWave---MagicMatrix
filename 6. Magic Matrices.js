function magicMatrices(matrix) {
    isMagic = true;
    let targetSum = matrix[0].reduce((a, b) => a + b);

    for (let i = 1; i < matrix.length; i++) {
        let rowSum = matrix[i].reduce((a, b) => a + b);
        if (rowSum != targetSum) {
            isMagic=false;
        }
    }
    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }
        if (colSum !== targetSum) {
            isMagic=false;
        }
    }
    console.log(isMagic);
}
magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
);
