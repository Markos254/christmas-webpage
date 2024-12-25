function createSnowflakes() {
    let numberOfSnowflakes = 50; // Adjust for more or fewer snowflakes
    for (let i = 0; i < numberOfSnowflakes; i++) {
      let snowflake = document.createElement('div');
      snowflake.innerHTML = '❄';
      snowflake.classList.add('snowflake');
      snowflake.style.left = Math.random() * 100 + 'vw';
      snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
      snowflake.style.animationDelay = Math.random() * 5 + 's';
      document.body.appendChild(snowflake);
    }
  }
  createSnowflakes();

  function playBellSound() {
    document.getElementById('bell-sound').play();
  }

  var audio = document.getElementById('background-music');
  audio.volume = 0.7;  // Adjust the value to your desired volume level (0.0 to 1.0)