/**
  860. 柠檬水找零
  收下五美元，五美元的数量加1，
  收下十美元，如果没有五美元，就无法找零
  收下二十美元，如果没有10美元和五美元，就需要三张五美元，不然就无法找零
 */
 function lemonadeChange(bills: number[]): boolean {
  let five = 0,  ten = 0
  for (let i = 0; i < bills.length; i++) {
      let item = bills[i]
      if (item === 5) {
          five++
      } else if (item === 10) {
          if (five === 0) return false
          five--
          ten++
      } else {
          if (five > 0 && ten > 0) {
              five--
              ten--
          } else if (five > 3) {
              five -= 3
          } else {
              return false
          }
      }
  }
  return true
};

/****
  529. 扫雷游戏
 */
 function updateBoard(board: string[][], click: number[]): string[][] {
  // 如果开始就点到M就把位置变为X结束
  if (board[click[0]][click[1]] === 'M') {
      board[click[0]][click[1]] = 'X'
      return board
  }
  // 探索这个点击位置的旁边八个方向上的每一个应该是什么，如果是E，如果相邻没有地雷，就标记为B，然后再探索B的八个方向，如果有雷，就把这个位置填上雷的个数
  dfs(board, click[0], click[1])
  return board
};

function dfs (board: string[][], x: number, y: number): void {
  // 判断边界
  if (x < 0 || x > board.length - 1 || y < 0 || y > board[0].length - 1) {
      return
  }
  // 查看这个位置旁边的八个位置有多少个雷
  let count = nums(board, x, y)
  if (board[x][y] === 'E') {
      if (count === 0) {
          board[x][y] = 'B'
          // 递归探索身边的八个节点是否也符合相同规则
          for (let a = -1; a <= 1; a++) {
              for (let b = -1; b <= 1; b++) {
                  // 只有同时满足a,b都为0的时候，这个时候，位置不变
                  if (a === 0 && b === 0) continue
                  dfs(board, a + x, b + y)
              }
          }
      } else {
          board[x][y] = '' + count
      }
  }
}

function nums (board: string[][], x: number, y: number): number {
  let count = 0
  // 判断边界
  for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
          if (x + i < 0 || x + i > board.length - 1 || y + j < 0 || y + j > board[0].length - 1) continue
          if (board[x + i][y + j] === 'M') {
              count++
          }
      }
  }
  return count
}


/***
  153. 寻找旋转排序数组中的最小值
 */
 function findMin(nums: number[]): number {
  let start = 0, end = nums.length - 1
  while (start < end) {
      let mid = start + Math.floor((end - start) / 2)
      if (nums[mid] > nums[end]) {
          start = mid + 1
      } else {
          end = mid
      }
  }
  return nums[start]
};