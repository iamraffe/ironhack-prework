class Game
  attr_reader :players, :board, :current_player, :other_player

  def initialize(players, board = Board.new)
    @players = players
    @board = board
    @current_player, @other_player = players.shuffle
  end

  def switch_players
    @current_player, @other_player = @other_player, @current_player
  end

  def move_to_coordinate(current_move)
    translation_table = {
      "1" => [0, 0],
      "2" => [1, 0],
      "3" => [2, 0],
      "4" => [0, 1],
      "5" => [1, 1],
      "6" => [2, 1],
      "7" => [0, 2],
      "8" => [1, 2],
      "9" => [2, 2]
    }
    translation_table[current_move]
  end
end

class Board
  def default_grid
    Array.new(3) { Array.new(3) { Cell.new } }
  end
end

class Cell
  
end

class Player

end

def game_init()
  puts "Welcome to tic tac toe"
  first_player = Player.new({color: "X", name: "bob"})
  second_player = Player.new({color: "O", name: "frank"})
  Game.new([first_player, second_player]).play
end

game_init()
