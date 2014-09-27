private var enemySpeed: int;
var jumpSpeed: float;
var	jumpVelocity: float;
var amtToMove: float; //variable to edit the speed of the moving object 
var eJump: boolean; 
var state: int; 
var firstMove: boolean;
var secondMove: boolean;


function Start()
{
	enemySpeed = 13;
	
	state = Random.Range(1, 4);
	//state = 3;

	eJump = true;
	
	 firstMove = true;
    secondMove = false;
}

function Update () 
{
	amtToMove = enemySpeed * Time.deltaTime;
	
	if(firstMove || secondMove){
	transform.Translate(Vector3(-1, 0, 0) * amtToMove);
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
	if(eJump){
		 rigidbody.velocity.y = 20.0; 
		 eJump = false;
		
	}

}
function pause(){
	firstMove = false;
	yield WaitForSeconds(1);
	secondMove = true;
}