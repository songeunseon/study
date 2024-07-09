document.addEventListener('DOMContentLoaded', function() {
  const images = ['./img/scissors.png', './img/rock.png', './img/paper.png'];
  let comImageIndex = 0;
  let interval;
  let winCount = localStorage.getItem('winCount') ? parseInt(localStorage.getItem('winCount')) : 0;
  let loseCount = localStorage.getItem('loseCount') ? parseInt(localStorage.getItem('loseCount')) : 0;
  let drawCount = localStorage.getItem('drawCount') ? parseInt(localStorage.getItem('drawCount')) : 0;

  document.getElementById('start').addEventListener('click', function() {
      document.getElementById('view').style.opacity = '1';
      document.getElementById('start').style.display = 'none';
      interval = setInterval(() => {
          comImageIndex = (comImageIndex + 1) % images.length;
          document.getElementById('com').innerHTML = `<img src="${images[comImageIndex]}" alt="com" style="width: 300px;">`;
      }, 100);
  });

  document.getElementById('reset').addEventListener('click', function() {
    clearInterval(interval);
    interval = setInterval(() => {
      comImageIndex = (comImageIndex + 1) % images.length;
      document.getElementById('com').innerHTML = `<img src="${images[comImageIndex]}" alt="com" style="width: 300px;">`;
    }, 100);
      winCount = 0;
      loseCount = 0;
      drawCount = 0;
      updateResults();
      localStorage.clear();
      alert(`초기화 되었습니다 게임을 다시 시작하세요`);
  });

  const scissors = document.getElementById('scissors');
  const rock = document.getElementById('rock');
  const paper = document.getElementById('paper');

  scissors.addEventListener('click', function() {
      const userChoice = '가위';
      compareChoices(userChoice, getComputerChoice());
  });

  rock.addEventListener('click', function() {
      const userChoice = '바위';
      compareChoices(userChoice, getComputerChoice());
  });

  paper.addEventListener('click', function() {
      const userChoice = '보';
      compareChoices(userChoice, getComputerChoice());
  });

  function getComputerChoice() {
      const choices = ['가위', '바위', '보'];
      return choices[comImageIndex];
  }

  function compareChoices(userChoice, computerChoice) {
      let result;
      if (userChoice === computerChoice) {
          result = '무승부';
          drawCount++;
      } else if (
          (userChoice === '가위' && computerChoice === '보') ||
          (userChoice === '바위' && computerChoice === '가위') ||
          (userChoice === '보' && computerChoice === '바위')
      ) {
          result = '이겼다';
          winCount++;
      } else {
          result = '졌다';
          loseCount++;
      }
      updateResults();
      alert(`플레이어 ${userChoice}, 컴퓨터 ${computerChoice} 결과는 ${result}.`);
  }

  function updateResults() {
      document.getElementById('win').textContent = winCount;
      document.getElementById('lose').textContent = loseCount;
      document.getElementById('draw').textContent = drawCount;
  }

  updateResults();
});