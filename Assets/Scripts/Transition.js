#pragma strict

function Start () {

}
//1.5 hours


function Update () {
	LevelSwitch(); 
	if(StartScreen.Win){
		guiText.text = "Win. Health: " + StartScreen.Health + " Score: " + StartScreen.Score;
	}else{
		guiText.text = "Lose. Health: " + StartScreen.Health + " Score: " + StartScreen.Score;
	}
}

function LevelSwitch(){
	yield WaitForSeconds(5);
	//Application.LoadLevel(Random.Range(2,4));
	if(StartScreen.Health > 0){
		Application.LoadLevel(3);
	}else{
		Application.LoadLevel(0);
	}
}