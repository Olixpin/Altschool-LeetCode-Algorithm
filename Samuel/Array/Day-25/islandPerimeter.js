var islandPerimeter = function(grid) {
    const W = grid[0].length, H = grid.length;
       const countEdges = (x, y) => {
           var res = 0;
           if (grid[y][x]) { 
               res += y - 1 < 0 ? 1 : grid[y - 1][x] === 0;
               res += x + 1 >= W ? 1 : grid[y][x + 1] === 0;
               res += y + 1 >= H ? 1 : grid[y + 1][x] === 0;
               res += x - 1 < 0 ? 1 : grid[y][x - 1] === 0;
           }
           return res;
       };
       var perimeter = 0, x = 0; y = 0;
       for (y = 0; y < H; y ++) {
           for (x = 0; x < W; x ++) {
               perimeter += countEdges(x, y);
           }
       }
       return perimeter;
   };