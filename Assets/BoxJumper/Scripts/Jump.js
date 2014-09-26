var distToGround: float;
var jumpSpeed: float;
var	jumpVelocity: float;
 
function Start()
{
  // get the distance to ground
  distToGround = collider.bounds.extents.y;
}
 
function IsGrounded(): boolean 
{
  return Physics.Raycast(transform.position, -Vector3.up, distToGround + 0.1);
}
 
function Update () 
{	//pressing down the spacebar makes player jump & also checks if our player is on the ground before he can jump
  if (Input.GetKeyDown(KeyCode.Space) && IsGrounded())
  {	//jumpspeed determines height and jumpvelocity I'm assuming helps play with the speed of the starting jump and land
    rigidbody.velocity.y = jumpSpeed * jumpVelocity;
    
  }
  
    
  if(transform.position.y > 0.5){
    Physics.gravity = Vector3(0, -80.0, 0);
    }
}

function OnTriggerEnter(otherObject:Collider)
{
	//recognizes any gameobject with the tag "enemy"
	if(otherObject.gameObject.tag == "enemy")
	{
		//enemy will destroy the player upon collision
		Destroy(gameObject);
		
		//Debug.Log("you lost!");
		
		
		StartScreen.Win = false;
		StartScreen.Health--;
		
		Application.LoadLevel(1);
	}
	
}