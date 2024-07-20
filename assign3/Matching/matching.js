document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.cards img');
    const restartButton = document.querySelector('button');
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let matches = 0;
  
    const cardImages = [
      '1clubs.png', '1hearts.png',
      '2clubs.png', '2hearts.png',
      '3clubs.png', '3hearts.png'
    ];
  
    function shuffleCards() {
      cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 6);
        card.style.order = randomPos;
      });
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
      let isMatch = firstCard.id[0] === secondCard.id[0];  //AI
      if (isMatch) {
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
      matches++;
  
      if (matches === 3) {
        setTimeout(() => {
          alert('Congratulations! You won!');
        }, 500);
      }
  
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
      [hasFlippedCard, lockBoard] = [false, false];
      [firstCard, secondCard] = [null, null];
    }
  
    function restartGame() {
      cards.forEach(card => {
        card.src = 'back.png';
        card.addEventListener('click', flipCard);
      });
      matches = 0;
      shuffleCards();
      resetBoard();
    }
  
    shuffleCards();
    cards.forEach(card => card.addEventListener('click', flipCard));
    restartButton.addEventListener('click', restartGame);
  });