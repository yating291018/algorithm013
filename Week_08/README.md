学习笔记
1. 冒泡排序
原理：
  比较相邻的元素。如果第一个比第二个大，就交换它们两个；
  对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
  针对所有的元素重复以上的步骤，除了最后一个；
  重复步骤1~3，直到排序完成。
  function bubbleSort (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = 0; j < nums.length - 1 - i; j++) {
        if (nums[j] > nums[j + 1]) {
          let temp = nums[j]
          nums[j] = nums[j + 1]
          nums[j + 1] = temp
        }
      }
    }
    return nums
  }
2. 选择排序
原理：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。 
function selectSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let min = i
    for (let j = i + 1; j < nums.length; j++) {
      // 找最小值索引
      if (nums[min] > nums[j]) {
        min = j
      }
    }
    // 交换最小值
    let temp = nums[i]
    nums[i] = nums[min]
    nums[min] = temp
  }
  return nums
}

3. 插入排序
原理： 通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入
function insertSort (nums) {
  let preindex, current
  for (let i = 1; i < nums.length; i++) {
    preindex = i - 1
    current = nums[i]
    while (preindex >= 0 && nums[preindex] > current) {
      nums[preindex + 1] = nums[preindex]
      preindex--
    }
    nums[preindex + 1] = current
  }
  return nums
}

4. 希尔排序
原理：它与插入排序的不同之处在于，它会优先比较距离较远的元素
function shellSort (nums) {
  let len = nums.length
  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < len; i++) {
      let j = i
      let current = nums[i]
      while (j - gap >= 0 && current < arr[j - gap]) {
        arr[j] = arr[j - gap]
        j = j - gap
      }
      arr[j] = current
    }
  }
  return nums
}

5. 归并排序
function mergeSort (nums) {
  let len = nums.length
  if (len <= 2) {
    return nums
  }
  // 中点
  let middle = Math.floor(len / 2)
  let left = nums.slice(0, middle)
  let right = nums.slice(middle)
  let res = []
  // 一直循环到有一个为null
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      res.push(left.shift())
    } else {
      res.push(right.shift())
    }
  }
  // 剩下的就直接放入
  while (left.length) {
    res.push(left.shift())
  }
  while (right.length) {
    res.push(right.shift())
  }
  return res
}

6. 快速排序
原理： 通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序
function quickSort (left, right, nums) {
  if (left >= right) return false
  let start = left,
      end = right,
      flag = left
  while (left < right) {
    // 由右向左如果小于flag所在的值就交换
    while ((left < right) && (nums[right] >= nums[flag])) {
      right--
    }
    if (nums[right] < nums[flag]) {
      let temp = nums[right]
      nums[right] = nums[flag]
      nums[flag] = temp
      flag = right
    }
    // 再从左边向右查找
    while ((left < right) && (nums[left] <= nums[flag])) {
      left++
    }
    if (nums[left] > nums[flag]) {
      let temp = nums[left]
      nums[left] = nums[flag]
      nums[flag] = temp
      flag = left
    }
    quickSort(start, flag - 1, nums)
    quickSort(flag + 1, end, nums)
  }
}

7. 堆排序
原理: 
function buildMaxHeap (nums) {
  for (let i = Math.floor(nums / 2); i >= 0; i--) {
    heapify(nums, i)
  }
}
function heapify (nums, i) {
  let left = 2 * i + 1
  let right = 2 * i + 2
  let target = i
  if (left < nums.length && nums[left] > nums[target]) {
    target = left
  }
  if (right < nums.length && nums[right] > nums[target]) {
    target = right
  }
  if (target !== i) {
    swap(nums, i, target)
    heapify(nums, target)
  }
}
function swap (nums, i, target) {
  let temp = nums[i]
  nums[i] = nums[target]
  nums[target] = temp
}
function heapSort (nums) {
  buildMaxHeap(nums)
  for(let i = nums.length - 1; i > 0; i--) {
    swap(nums, 0, i)
    heapify(nums, 0)
  }
}