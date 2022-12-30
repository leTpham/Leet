"use strict";

/** Given an integer array nums, return an array answer such that
 * answer[i] is equal to the product of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * You must write an algorithm that runs in O(n) time and without using the division operation.
  Input: nums = [1,2,3,4]
  Output: [24,12,8,6]

  Input: nums = [-1,1,0,-3,3]
  Output: [0,0,9,0,0]
*/

function productExceptSelf(nums) {
  let res = [];
  let leftProds = []; //incremental multiplication from left
  let rightProds = []; //incremental multiplication from right
  let left = 1;
  let right = 1;
  for (let i = 0; i < nums.length; i++) {
    //while traversing nums array, leftProds will keep track of the products
    //of all numbers up until that num[i] (because we start with 1)
    leftProds[i] = left;
    //leftProds will just keep getting bigger by the multiplication of the next nums[i];
    left *= nums[i];

    //eg: left arr = [1, (1)x1, (1x1)x2, (1x1x2)x3] = [1, 1, 2, 6]
  }
  for (let j = nums.length - 1; j >= 0; j--) {
    //while traversing nums array, rightProds will keep track of the products
    //of all numbers up until that num[j] (because we start with 1)
    rightProds[j] = right;
    //rightProds will just keep getting bigger by the multiplication of the previous nums[i];
    right *= nums[j];
    //eg: right arr = [(1x4x3)x2, (1x4)x3, (1)x4 ,1] = [24, 12, 4, 1]

    //update result array as the product of that number's left and right products
    res[j] = rightProds[j] * leftProds[j]
    //eg: result = [24, 12, 8, 6]
  }
  return res;
}

