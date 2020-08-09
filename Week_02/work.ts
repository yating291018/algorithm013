// 作业
/*
 *  有效的字母异位词(字母出现位置不同，数量相同)
    解法1：对字符串进行排序，得到的值会一样
 */
 function isAnagram(s: string, t: string): boolean {
  s = s.split('').sort().join()
  t = t.split('').sort().join()
  return s === t
};

/**
  解法2： 使用hashMap,把s中相同的项当做key,value为出现的次数。再另一个t中遇见就删除，如果map的size为0的话，就说明两个字符串
  相等
 */

 function isAnagram2(s: string, t: string): boolean {
  // s = s.split('').sort().join()
  // t = t.split('').sort().join()

  // return s === t
  if (s.length !== t.length) return false
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
      let item = s.charAt(i)
      let num = map.get(item)
      if (num) {
          map.set(item, num + 1)
      } else {
          map.set(item, 1)
      }
  }
  for (let j = 0; j < t.length; j++) {
      let item1 = t.charAt(j)
      let num1 = map.get(item1)
      if (num1) {
          num1 - 1 === 0 ? map.delete(item1) : map.set(item1, num1 - 1)
      } else {
          return false
      }
  }
  return map.size === 0
};

/*
 ** 1. 两数之和
  解法： 维护一个map，key值为target - nums[i]的值，value为nums[i]的下标，如果nums中的数据，再map可以找到，那么就
   说明对应的value就是与当前值的和就是target
 */
 function twoSum(nums: number[], target: number): number[] {
  const list: number[] = []
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
      let index = map.get(nums[i])
      if (index !== undefined) {
          list.push(index, i)
      } else {
          map.set(target - nums[i], i)
      }
  }
  return list
};

/**
  N叉树的前序遍历
  N叉树的前序遍历，先遍历根节点，再遍历孩子节点。深度优先遍历
 */
 var preorder = function(root) {
  let list = []
  if (root === null) return []
  function preorder1 (root) {
      list.push(root.val)
      for (let i = 0; i < root.children.length; i++) {
          preorder1(root.children[i])
      }
  }
  preorder1(root)
  return list
};
/**
  N叉树的后序遍历
  先遍历孩子节点，再遍历父节点。深度优先遍历，BFS
 */
 var postorder = function(root) {
  let list = []
  if (root === null) return list
  function postorder1 (root) {
      for (let i = 0; i < root.children.length; i++) {
          postorder1(root.children[i])
      }
      list.push(root.val)
  }
  postorder1(root)
  return list
};
/**
  * N叉树的层序遍历
 */
 var levelOrder = function(root) {
  let result = []
  if (root === null) {
      return result
  }
  let nodelist = []
  nodelist.push(root)
  while (nodelist.length !== 0) {
      let valueList = []
      let size = nodelist.length
      for (let i = 0; i < size; i++) {
          let node = nodelist.shift()
          valueList.push(node.val)
          let childrenList = node.children
          for (let item of childrenList) {
              if (item) {
                  nodelist.push(item)
              }
          }
          // i--
      }
      result.push(valueList)
  }
  return result
};

/***
  字母异位词分组
  把数组的每一项的排序之后的作为Map的key，把这一项加入相同的key中，最后取出Map的value
 */
 function groupAnagrams(strs: string[]): string[][] {
  let list: string[][] = []
  const map: Map<string, string[]> = new Map()
  for (let i = 0; i < strs.length; i++) {
      let item = strs[i].split('').sort().join()
      let numslist = map.get(item)
      if (numslist) {
          map.set(item, [ ...numslist, strs[i]])
      } else {
          map.set(item, [strs[i]])
      }
  }
  for (let item of map) {
      list.push(item[1])
  }
  return list
};