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
