private var enemySpeed: int;
var jumpSpeed: float;
var	jumpVelocity: float;
var amtToMove: float; //variable to edit the speed of the moving object 
var enemyJump: boolean; 
var state: int; 
var move: boolean;
var secondMove: boolean;


function Start()
{
	//Set Speed veriables here
	if(StartScreen.Speed == "Low"){
	
	}else if (StartScreen.Speed == "Mid"){
	
	}else if (StartScreen.Speed == "High"){
	
	}

	enemySpeed = 13;
	
	state = Random.Range(1, 4);
	//state = 3;

	enemyJump = true;
	
	move = true;
}

function Update () 
{
	amtToMove = enemySpeed * Time.deltaTime;
	
	if(move){
		transform.Translate(Vector3(-1, 0, 0) * amtToMove);
		//rigidbody.velocity.x = -1 * amtToMove;
	}
	if(transform.position.x < -10 )
	{
		switch(state)
		{
			case 1:	
				break;
				
			case 2: 
				jump();
				break;
				
			case 3: 
				pause();
				break;
		}
	}
	
	Physics.gravity = Vector3(0, -80.0, 0);	
}

function jump(){
	if(enemyJump){
		 rigidbody.velocity.y = 20.0;
		 enemyJump = false;
	}

}
function pause(){
	move = false;
	yield WaitForSeconds(1);
	move = true;
}