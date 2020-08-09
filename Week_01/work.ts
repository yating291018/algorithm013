// 作业

/**
  1. 用 add first 或 add last 这套新的 API 改写 Deque 的代码
 */


 /*
 ** 2. 分析 Queue 和 Priority Queue 的源码
  */


/***
3. 删除排序数组中的重复项
   利用指针，比较两个相邻的元素，如果相等，就进行下一个比较，如果不相等就把当前元素加入新指针为下标的
 */

function removeDuplicates(nums: number[]): number {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== nums[i + 1]) {
          nums[j] = nums[i]
          j++
      }
  }
  return j
};

// 利用数组自已的删除方法
function removeDuplicates(nums: number[]): number {
  for (let i = 0;i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
        nums.splice(i, 1)
        i--
    }
  }
  return nums.length
}


/***
  4. 旋转数组
  向右移动的，后面数据的位置会被占住，移动的数据，去填充空出的，用temp暂存，然后在下一轮的时候，在赋值给下一个位置
  如果是左移动的话，就前面的数据会先被移动，向后面插入，
 */
 function rotate(nums: number[], k: number): void {
  let temp = 0
  for (let i = 0; i < k; i++) {
      let prev = nums[nums.length - 1]
      for (let j = 0; j < nums.length; j++) {
          temp = nums[j]
          nums[j] = prev
          prev = temp
      }
  }
};

/***
5. 加一
 */
function plusOne(digits: number[]): number[] {
  let temp = 1
  if (digits.length === 1) {
      if (digits[0] + 1 === 10) {
          return [1, 0]
      }
  }
  for (var i = digits.length - 1; i >= 0; i--) {
      if (digits[i] + temp === 10) {
          digits[i] = 0
          temp = 1
      } else {
          digits[i] += temp
          temp = 0
      }
  }

  if (i < 0) {
      if (temp === 1) {
          digits.unshift(1)
      }
  }
  return digits
};

/****
  6. 合并两个有序链表
  链表的移动， p = p.next while。 p === null为止
 */
 function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null && l2 === null) {
      return null
  }
  let first = l1,
      second = l2,
      p = null
  let newnode = new ListNode()
  p = newnode
  while (first !== null && second !== null) {
      newnode.next = first.val <= second.val ? first : second
      newnode = newnode.next
      first.val <= second.val ? first = first.next : second = second.next
  }
  if (first !== null) {
      newnode.next = first
  }
  if (second !== null) {
      newnode.next = second
  }
  // newnode = newnode.next
  return p.next
};


/***
 * 7. 合并两个有序数组
 * 题解：
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let l = m + n - 1
    for (let i = l; i >= 0; i--) {
        if (n === 0) {
            break
        }
        if (nums1[m - 1] >= nums2[n - 1]) {
            nums1[i] = nums1[m - 1]
            m--
        } else {
            nums1[i] = nums2[n - 1]
            n--
        }
    }
};

/**
 * 8. 移动0
 */
function moveZeroes(nums: number[]): void {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i]
            j++
        }
    }
    for (let k = j; k < nums.length; k++) {
        nums[k] = 0
    }
    // 暴力解法
    // for (let i = 0;i < nums.length; i++) {
    //     if (nums[i] === 0 && i !== 0) {
    //         nums.splice(i, 1)
    //         nums.unshift(0)
    //     }
    // }
};
