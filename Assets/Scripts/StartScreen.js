#pragma strict
var pressedThing : KeyCode;

public static var Health : int = 5;
public static var Win : boolean = false;
public static var Score : int = 0;

function Start () {
Health = 5;
Score = 0;
}

function OnGUI () {
    // Make a background box
    GUI.Box (Rect (0,0,100,90), "Start Screen");

    // Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
    if (GUI.Button (Rect (20,40,80,20), "Transition to random level")) {
        Application.LoadLevel (Random.Range(2,4));
        Application.LoadLevel (3);
    }
}


function Update () {
	if(Input.GetKey(pressedThing)){
		Application.LoadLevel(1);
	}
}