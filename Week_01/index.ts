// work1 作业

/**
 * 盛最多水
 * 1. 暴力解法 （自已可以想到的)
 * 时间复杂度为 O(n ^ 2)
 * 运行时间耗费 860ms
 */

function maxArea(height: number[]): number {
  let max = 0
  for (let i = 0; i < height.length; i++) {
      for (let k = i + 1; k < height.length; k++) {
          let area = (k - i) * Math.min(height[i], height[k])
          max = Math.max(max, area)
      }
  }
  return max
};

/**
 * 2. 双指针解法
 * O(n) 
 * 运行时间 80ms
 * 
 */
function maxArea(height: number[]): number {
  let start = 0,
      end = height.length - 1,
      max = 0
  while (start < end) {
      max = Math.max(max, (end - start) * (height[start] < height[end] ? height[start] : height[end]))
      height[start] < height[end] ? ++start : --end
  }
  return max
};

// 三数之和
