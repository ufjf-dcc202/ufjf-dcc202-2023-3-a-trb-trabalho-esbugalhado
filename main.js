class DiceGame {
    constructor() {
      this.players = ['Jogador 1', 'Jogador 2'];
      this.currentPlayerIndex = 0;
      this.board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ];
    }
  
    rollDice() {
      return Math.floor(Math.random() * 6) + 1;
    }
  
    calculateColumnScore(column) {
      const countMap = {};
      let columnScore = 0;
  
      for (const value of column) {
        countMap[value] = (countMap[value] || 0) + 1;
      }
  
      for (const [value, count] of Object.entries(countMap)) {
        columnScore += value * count;
      }
  
      return columnScore;
    }
  
    playTurn() {
      const currentPlayer = this.players[this.currentPlayerIndex];
      const diceValue = this.rollDice();
  
      console.log(`${currentPlayer} rolou o dado: ${diceValue}`);
  
      // Escolha aleatória da coluna
      const randomColumn = Math.floor(Math.random() * 3);
  
      console.log(`${currentPlayer} escolheu a coluna ${randomColumn + 1}`);
  
      // Atualiza o tabuleiro
      for (let i = 0; i < 3; i++) {
        this.board[i][randomColumn] = diceValue;
      }
  
      // Remove dados do oponente com o mesmo valor na coluna
      const opponentIndex = (this.currentPlayerIndex + 1) % 2;
      for (let i = 0; i < 3; i++) {
        this.board[i][randomColumn] = 0; // Remove dados na coluna do jogador atual
        this.board[i][randomColumn] = this.board[i][randomColumn].filter(value => value !== diceValue);
      }
  
      // Calcula a pontuação da coluna
      const columnScore = this.calculateColumnScore(this.board.map(row => row[randomColumn]));
  
      console.log(`Pontuação na coluna: ${columnScore}`);
  
      // Verifica se o jogador venceu
      const playerWon = this.board.every(row => row.every(value => value !== 0));
  
      if (playerWon) {
        console.log(`${currentPlayer} venceu!`);
      } else {
        // Troca para o próximo jogador
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % 2;
        console.log('\nPróximo turno\n');
      }
    }
  }
  
  // Exemplo de uso
  const game = new DiceGame();
  
  while (true) {
    game.playTurn();
    if (game.checkForWinner()) {
      break;
    }
  }
  