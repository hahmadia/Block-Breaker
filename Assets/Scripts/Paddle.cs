using UnityEngine;
using System.Collections;

public class Paddle : MonoBehaviour {

	
	public float minPaddleX;
	public float maxPaddleX;
	public static bool useMouse = true;
	
	private Ball ball;
	private Vector3 paddlePos = new Vector3(8f,0.5f,0f);
	
	
	void Start(){
		ball = GameObject.FindObjectOfType<Ball>();
	}
	
	// Update is called once per frame
	void Update () {
		
		if (useMouse){
			MoveWithMouse();
		}
		else{
			MoveWithKeyboard();
		}
		
		this.transform.position = paddlePos;	
	}
	
	// Autoplay method used for testing.	
	void AutoPlay() {
		paddlePos.x = Mathf.Clamp(ball.transform.position.x,minPaddleX ,maxPaddleX);		
	}
	
	void MoveWithMouse(){
		float mousePosInBlocks  = (Input.mousePosition.x/Screen.width) * 16;
		paddlePos.x = Mathf.Clamp(mousePosInBlocks,minPaddleX, maxPaddleX);
	}
	
	void MoveWithKeyboard(){
		float speed = 0.15f;
		
		if (Input.GetKey(KeyCode.LeftArrow)){
			paddlePos.x = Mathf.Clamp(paddlePos.x-speed,minPaddleX,maxPaddleX);
		}
		else if (Input.GetKey(KeyCode.RightArrow)){
			paddlePos.x = Mathf.Clamp(paddlePos.x+speed,minPaddleX,maxPaddleX);
		}
	}
	
}
