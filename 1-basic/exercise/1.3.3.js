"use strict";

/**
 * 判断给定的数组序列是否可以还原成一系列的入栈出栈操作
 * 可以则输出具体步骤，否则输出错误信息
 * @param nums {number[]} 数字构成的数组
 */
function test(nums) {
    let max    = 0;
    let result = '开始！\n';

    for (let i = 0; i < nums.length - 1; i++) {
        max = max > nums[i] ? max : nums[i];
        if (i === 0) {
            for (let j = 0; j <= nums[i]; j++) {
                result += '入栈：' + j + '\n';
            }
            result += '出栈：' + nums[i] + '\n';
        }
        if (nums[i] > nums[i + 1]) {
            result += '出栈：' + nums[i + 1] + '\n';
        } else if (max < nums[i + 1]) {
            for (let m = max + 1; m <= nums[i + 1]; m++) {
                result += '入栈：' + m + '\n';
            }
            result += '出栈：' + nums[i + 1] + '\n';
        } else {
            result = '无法还原成混合栈操作！';
            break;
        }
    }

    console.log(result);
}

// 测试用例
//test([4, 3, 2, 1, 0, 9, 8, 7, 6, 5]);
//test([4, 6, 8, 7, 5, 3, 2, 9, 0, 1]);
test([2, 5, 6, 7, 4, 8, 9, 3, 1, 0]);
