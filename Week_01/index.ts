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
 function threeSum(nums: number[]): number[][] {
  nums.sort((a: number, b: number) => a - b)
  let list = []
  if (nums.length === 0 || nums.length < 3) return []
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
          return list
      }
      let start = i + 1,
          end = nums.length - 1
      if (i > 0 && nums[i] === nums[i - 1]) {
          continue
      }
      while(start < end) {
          if (nums[start] + nums[i] + nums[end] === 0) {
              list.push([nums[i], nums[start], nums[end]])
              while (start < end && nums[start] === nums[start + 1]) {
                  start = start + 1
              }
              while (start < end && nums[end] === nums[end - 1]) {
                  end = end - 1
              }
              start = start + 1
              end = end - 1
          } else if (nums[start] + nums[i] + nums[end] > 0) {
              end = end - 1
          } else {
              start = start + 1
          }
      }
  }
  return list
};



 // 零移动
 /**
   双指针方法
  */
  function moveZeroes(nums: number[]): void {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            nums[j] = nums[i]
            j++
        }
    }
    for (let k = j; k < nums.length; k++) {
        nums[k] = 0
    }
};

// 爬楼梯,动态规划
function climbStairs(n: number): number {
  let prev = 1,
      current = 2,
      next = 0
  if (n <= 2) return n
  for (let i = 2; i < n; i++) {
      next = prev + current
      prev = current
      current = next
  }
  return current
};

