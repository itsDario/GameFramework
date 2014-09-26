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
	
	Debug.Log(StartScreen.Speed);
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

function OnGUI () {
    // Make a background box
    GUI.Box (Rect (13,10,100,90), "Speed Switch");

    // Speed Selection menu
    if (GUI.Button (Rect (20,40,80,20), "Low")) {
    	StartScreen.Speed = "Low";
    }
    if (GUI.Button (Rect (20,60,80,20), "Mid")) {
    	StartScreen.Speed = "Mid";
    }
    if (GUI.Button (Rect (20,80,80,20), "High")) {
    	StartScreen.Speed = "High";
    }
}