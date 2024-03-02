function displayHighscores (){
  var highscores =
  JSON.parse(window.localStorage.getItem('highscores')) || [];

  for (let i = 0; i < highscores.length; i++) {
    const element = highscores[i];
    var liTag = document.createElement("li")
    liTag.textContent = element.initials + "- " + element.score;
    var olel = document.getElementById("highscores")
    olel.appendChild(liTag)
    
  }
}



displayHighscores()