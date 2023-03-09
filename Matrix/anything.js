"use strict";

/**
 * Given 2d matrix, potentially uneven height and width.
 * only elements are 0 and 1s
 * 0 = land,
 * 1 = river
 *
 * GOAL: return an array consisting all differnt length of differnt rivres
 * horiz / vertical => river
 *
 * eg: Sample:
matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
]

Sample Output
[1, 2, 2, 2, 5] or [2,1,2,5,2] .... order does not matter;

loop through the matrix. if element is 1 => check surrounding.
if adjacent to 1, increment current length;
once checked surrounding is done, add it to output array of lengths.
along the way, replace the 1s that have been checked with *
 */

function findRiversLength(land) {
  const height = land.length;
  const width = land[0].length;
  const riverLength = [];

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      let currLength = 0;
      if (land[i][j] === 1) {
        let validAdjacent = [land[i][j]];
        //check surrounding and see if it's adjacent to 1;
        //if there's a one => currLength++;
        //that one becomes [*]
        //check land[i+1][j], land[i-1][j], land[i][j+1], land[i][j-1]
        //while we still have 1 adjacent => keep doing this
        //when we run out, add currLength to the riverLength array
        //stack: whenever I have an adjacent, check that cell. if cell is 1, then
        // pop it, and increment the currLength;
        //1, adjacent = [1] => adjacent = [] => currLength = 1
        // adjacent = [, , 0] currLength = 2;
        while (validAdjacent.length) {
          if (validAdjacent.pop() === 1) {
            if (i < height) {
              if (land[i + 1][j] === 1) {
                validAdjacent.push(land[i + 1][j]);
                land[i + 1][j] === "*";
              }
            }
            if (j > 0) {
              if (land[i][j - 1] === 1) {
                validAdjacent.push(land[i][j - 1]);
                land[i + 1][j] === "*";
              }
            }
            if (i > 0) {
              if (land[i - 1][j] === 1) {
                validAdjacent.push(land[i - 1][j]);
                land[i + 1][j] === "*";
              }
            }
            if (j < width) {
              if (land[i][j + 1] === 1) {
                validAdjacent.push(land[i][j + 1]);
                land[i + 1][j] === "*";
              }
            }
            currLength++;
          }
        }
        riverLength.push(currLength);
      }
    }
  }
  return riverLength;
}

function dfs (start, land, visited) {
  const directions = [[1,0], [-1,0], [0,1], [0,-1]];
  const stack = [start];
  let riverLength = 0;

  while (stack.length) {
    const [x,y] = stack.pop();
    if (visited[`${x}-${y}`] === undefined) {
      visited[`${x}-${y}`] = true;
      if (land[x][y] === 1) {
        riverLength++;
        for (let [x1,y1] of directions) {
          let newX = x + x1;
          let newY = y + y1;
          if (newX >=0 && newX < land.length && newY >=0 && newY <= land[0].length) {
            stack.push([newX, newY]);
          }
      	}
    	}
    }
  }}