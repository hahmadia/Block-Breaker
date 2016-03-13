using UnityEngine;
using System.Collections;

public class LoseCollider : MonoBehaviour {
	
	private LevelManager levelManager;
	private int lives = 3;
	private GameObject [] paddleLife;
	public bool lifeLost = false;
	
	
	void Start(){
		paddleLife = GameObject.FindGameObjectsWithTag("Life");
		SelectionSort(paddleLife);
	}
	
	void OnTriggerEnter2D (Collider2D trigger){
		Debug.Log("Trigger");
		HandleLives();
		
		if (lives <= 0){
			levelManager = GameObject.FindObjectOfType<LevelManager>();
			levelManager.LoadLevel("Lose Screen");
		}
		
	}
	
	
	void HandleLives(){
		Destroy(paddleLife[paddleLife.Length - lives]);
		lives--;
		lifeLost = true;
	}
	
	void SelectionSort(GameObject [] nums){
		GameObject temp;
		
		// Goes through the whole list
		for (int j = 0; j < nums.Length ; j++){
			
			// Goes through all the elements
			for (int i = 0; i < nums.Length-1;i++){
				
				// If the balance ahead is greater than the balance being compared, 
				// Then swap the two balances (So it ends up going from greatest balance 
				// To smallest balance
				if (nums[i].transform.position.x < nums[i+1].transform.position.x){
					temp = nums[i];
					nums[i] = nums[i+1];
					nums [i+1] = temp;
				}	
			
			}	
		
		}
	
	}
	
}
