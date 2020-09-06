/**
 *  最小路径和
 *  思路
    状态定义：
      设dp[i][j]为走到当前位置的最小路径和
    递推公式：
      只能向下或向右走，意味着当前格子只能由上边或者左边走过来
      dp[i][j] = Min(dp[i-1][j],dp[i][j-1]) + grid[i][j]
    初始化
      第一行第n列和第一列第n行为均原数组值
    边界条件
      格子有边界，因此当i==0 或j==0时，i-1和j-1会越界
      i = 0，j != 0时,dp[i][j] = dp[i][j-1]+grid[i][j]
      i !=0，j == 0时,dp[i][j] = dp[i-1][j]+grid[i][j]
      i !=0 && j != 0时,dp[i][j] = Min(dp[i-1][j],dp[i][j-1])+grid[i][j]
      i == 0 && j == 0时,dp[i][j]=grid[i][j]
    返回值
      dp最后一个元素值
 */
var minPathSum = function(grid) {
  let rows = grid.length, columns = grid[0].length
  let dp = Array.from(new Array(rows), () => new Array(columns))
  dp[0][0] = grid[0][0]
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (i > 0 && j === 0) {
              dp[i][0] = dp[i - 1][0] + grid[i][0]
          } else if (i === 0 && j > 0) {
              dp[0][j] = dp[0][j - 1] + grid[0][j]
          } else if (i > 0 && j > 0){
              dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
          }
      }
  }
  return dp[rows - 1][columns - 1]
};

/**
 * 91. 解码方法
 */
var numDecodings = function(s) {
    if (!s) return 0
    let len = s.length;
    let dp =  Array(len + 1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] === '0' ? 0 : 1;
    for (let i = 2; i <= len; i++) {
        if (s[i - 1] !== '0') {
            dp[i] += dp[i - 1];
        }
        if (s[i - 2] === '1' || (s[i - 2] === '2' && s[i - 1] >= 0 && s[i - 1] <= 6)) {
            dp[i] += dp[i - 2];
        }
    }
    return dp[len];
}

/**
 * 221. 最大正方形
 */
var maximalSquare = function(matrix) {
  if (matrix.length === 0) return 0;
  const dp = [];
  const rows = matrix.length;
  const cols = matrix[0].length;
  let max = Number.MIN_VALUE;

  for (let i = 0; i < rows + 1; i++) {
      if (i === 0) {
      dp[i] = Array(cols + 1).fill(0);
      } else {
      dp[i] = [0];
      }
  }

  for (let i = 1; i < rows + 1; i++) {
      for (let j = 1; j < cols + 1; j++) {
      if (matrix[i - 1][j - 1] === "1") {
          dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
          max = Math.max(max, dp[i][j]);
      } else {
          dp[i][j] = 0;
      }
      }
  }

  return max * max;
};
