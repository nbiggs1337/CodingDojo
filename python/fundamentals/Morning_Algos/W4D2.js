// floodFill(canvas, x, y, target)
// canvas is an array of array of numbers representing
// colored pixels (think MSPaint)
// x, y is your start point, target is your new "color"
// change the value at x, y on the canvas to
// the target value, then all points on the canvas 
// that were the original color and contiguous with the 
// point at x, y (no diagonals!) to the target color.
// example
// canvas is:
// [[3, 2, 4, 4, 4],
//  [4, 4, 4, 3, 3],
//  [4, 1, 1, 4, 4]]
// x, y is 2, 1  and target is 0
// canvas becomes:
// [[3, 2, 0, 0, 0],
//  [0, 0, 0, 3, 3],
//  [0, 1, 1, 4, 4]]
// another example, if canvas is:
// [[1, 0, 2, 0, 1],
//  [1, 0, 1, 1, 0],
//  [1, 0, 1, 0, 0],
//  [2, 0, 0, 2, 1]]
// x, y is 1, 2 and target is 9
// canvas[2][1]
// canvas becomes:
// [[1, 9, 2, 0, 1],
//  [1, 9, 1, 1, 0],
//  [1, 9, 1, 0, 0],
//  [2, 9, 9, 2, 1]]
// if x, y was intead 2, 1 and target was 9
// canvas would become:
// [[1, 0, 2, 0, 1],
//  [1, 0, 9, 9, 0],
//  [1, 0, 9, 0, 0],
//  [2, 0, 0, 2, 1]]
// you don't need to return anything,
// but if you feel the need to, use null or undefined
// make sure you don't go outside your canvas area

function floodFill(canvas, x, y, target) {
    var point = canvas[y][x]; //save!
    canvas[y][x] = target; //save!
    var up = y-1;
    var down = y+1;
    var left = x-1;
    var right = x+1;
    // console.log(canvas[left][x]);
    // console.log(canvas[right][x]);
    
    if (canvas[up] != undefined) {
        if (canvas[up][x] == point){
            floodFill(canvas,x,up,target);
        }
    }
    if (canvas[down] != undefined)
        if (canvas[down][x] == point){
            floodFill(canvas,x, down,target);
        }
    if (canvas[y][right] != undefined)
        if (canvas[y][right] == point){
            floodFill(canvas,right,y,target);
        }
    if (canvas[y][left] != undefined)
        if (canvas[y][left] == point){
            floodFill(canvas,left,y,target);
        }

}

// var sample_input = [[1, 0, 1, 1, 1],
//                     [0, 1, 1, 1, 0],
//                     [1, 0, 1, 0, 0]]
// floodFill(sample_input, 1, 1, 9)

// console.log(sample_input)

// var test = [[1, 9, 2, 0, 1],
//             [1, 9, 1, 1, 0],
//             [1, 9, 1, 0, 0],
//             [2, 9, 9, 2, 1]]
// floodFill(test, 1, 2, 0);
// console.log(test)

var test2 = [[3, 2, 4, 4, 4],
            [4, 4, 4, 3, 3],
            [4, 1, 1, 4, 4]]
floodFill(test2, 2, 1, 0)
console.log(test2);
