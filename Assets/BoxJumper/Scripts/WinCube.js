function OnTriggerEnter(otherObject:Collider)
{
	//recognizes any gameobject with the tag "enemy"
	if(otherObject.gameObject.tag == "enemy")
	{
		//enemy will destroy the player upon collision
		Destroy(gameObject);
		
		//Debug.Log("you lost!");
		
		
		StartScreen.Win = true;
		StartScreen.Score++;
		
		Application.LoadLevel(1);
	}
	
}