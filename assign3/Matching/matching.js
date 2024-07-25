    var cards = document.getElementsByTagName('img');
    var restartButton = document.getElementById('btn');
    var hasFlippedCard = false;
    var lockBoard = false;
    var firstCard, secondCard;
  
    var cardImages = [
      '1clubs.png', '1hearts.png',
      '2clubs.png', '2hearts.png',
      '3clubs.png', '3hearts.png'
    ];
  
    function shuffleCards() {
      for (var i = 0; i < cards.length; i++) {
        var randomPos = Math.floor(Math.random() * 6); 
        cards[i].style.order = randomPos; //ai
      }
    }
    
    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;
      
        this.src = this.id;
      
        if (!hasFlippedCard) {
          hasFlippedCard = true;
          firstCard = this;
          return;
        }
        
          secondCard = this;
          checkForMatch();

    }
  
    function checkForMatch() {
      var isMatch = firstCard.id[0] === secondCard.id[0];  //AI
      if (isMatch) {
        lockBoard = true;
        setTimeout(() => {
          firstCard.src = 'clear.png';
          secondCard.src = 'clear.png';
          disableCards();
        }, 1500);
      } else {
        unflipCards();
      }

    }
  
    function disableCards() {
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
      resetBoard();
    }
  
    function unflipCards() {
      lockBoard = true;
  
      setTimeout(() => {
        firstCard.src = 'back.png';
        secondCard.src = 'back.png';
  
        resetBoard();
      }, 1500);
    }
  
    function resetBoard() {
      hasFlippedCard = false;
      lockBoard = false;
      firstCard = null;
      secondCard = null;
    }
  
    function StartGame() {
      for (var i = 0; i < cards.length; i++) {
        cards[i].src = 'back.png';
        cards[i].addEventListener('click', flipCard);
      }
      shuffleCards();
      resetBoard();
    }
    
    StartGame();
    restartButton.addEventListener('click', StartGame);
