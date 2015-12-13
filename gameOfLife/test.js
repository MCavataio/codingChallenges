

describe('gameOfLife', function() {
  window.displayBoard = function() {};
    var board = [[1,0,1,0],
                 [0,1,0,1],
                 [0,0,0,1],
                 [1,1,0,1]]   
  describe('gameOfLife()', function() {
    it('returns the correct gameOfLife result', function() {
      var game = gameOfLife(board)
      expect(game[0].toString()).to.equal([0, 1, 1, 0].toString())
      expect(game[1].toString()).to.equal([0, 1, 0, 1].toString())
      expect(game[2].toString()).to.equal([1, 1, 0, 1].toString())
      expect(game[3].toString()).to.equal([0, 0, 1, 0].toString())
    });
  });
  describe('deadOrAlive()', function() {
    it('finds the correct value of cell in board', function() {
        var value1 = deadOrAlive(board,2,3)
        var value2 = deadOrAlive(board,0,0)
        var value3 = deadOrAlive(board,2,1)
        var value4 = deadOrAlive(board,0,3)
        expect(value1).to.be.equal(1)
        expect(value2).to.be.equal(0)
        expect(value3).to.be.equal(1)
        expect(value4).to.be.equal(0)
        
      });

  })
 
});