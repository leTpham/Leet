"use strict";

/**
 * An image is represented by an m x n integer grid image where image[i][j]
 * represents the pixel value of the image.
 *
 * You are also given three integers sr, sc, and color.
 * You should perform a flood fill on the image starting from the pixel image[sr][sc].
 * To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.
 *
 * Return the modified image after performing the flood fill.
 */

function floodFill(image, sr, sc, newColor, oldColor = image[sr][sc]) {
  if (
    //handle pixel's indices out of bound
    sr < 0 ||
    sc < 0 ||
    sr >= image.length ||
    sc >= image[sr].length ||
    //handle pixel not matching original color we want to change
    image[sr][sc] !== oldColor ||
    //handle pixel already the new color we want to change into
    image[sr][sc] === newColor
  ) {
    return image;
  }
  image[sr][sc] = newColor;
  floodFill(image, sr + 1, sc, newColor, oldColor);
  floodFill(image, sr - 1, sc, newColor, oldColor);
  floodFill(image, sr, sc + 1, newColor, oldColor);
  floodFill(image, sr, sc - 1, newColor, oldColor);
  return image;
}