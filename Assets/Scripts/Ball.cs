using UnityEngine;
using System.Collections;

public class Ball : MonoBehaviour {
	
	public Vector2 ballSpeed;	
		
	private Paddle paddle;
	private Vector3 paddleToBallVector;
	private bool gameStarted = false;
	private LoseCollider loseCollider;
	private AudioSource source;
	
	// Use this for initialization
	void Start () {
		source = GetComponent<AudioSource>();
		paddle = GameObject.FindObjectOfType<Paddle>();
		loseCollider = GameObject.FindObjectOfType<LoseCollider>();
		paddleToBallVector = this.transform.position - paddle.transform.position;
	}
	
	
	void OnCollisionEnter2D (Collision2D collision){
		Vector2 tweak = Vector2.zero;
		
		// If the ball collides with the paddle, figure out the side the paddle hit and reflect it on the same side.
		if (collision.gameObject == paddle.gameObject && gameStarted){
			// This vector3 is used to detect if the ball hit the paddle on left, right ,or middle.
			Vector3 hitPaddlePoint = paddle.transform.InverseTransformPoint(collision.contacts[0].point);
			tweak.x = hitPaddlePoint.x * 25f;
		}
		
		// Otherwise , tweak it accordingly 
		else{
			
			float maxX = 1f;
			float minX = 0f;
			
			if (this.GetComponent<Rigidbody2D>().velocity.y >= 0){
				
				float ballSpeedY = Random.Range(minX,maxX);
				float ballSpeedX; 
				
				if (this.GetComponent<Rigidbody2D>().velocity.y == 0){
					ballSpeedY = Random.Range (-maxX,minX);
				}
				
				if (this.GetComponent<Rigidbody2D>().velocity.x >= 0){
					ballSpeedX = Random.Range(minX,maxX);
				}
				else{
					ballSpeedX = Random.Range(-maxX,minX);
				}
				
				tweak = new Vector2(ballSpeedX,ballSpeedY);
			}
			
			else{
				
				float ballSpeedY = Random.Range(-maxX,minX);
				float ballSpeedX; 
				
				if (this.GetComponent<Rigidbody2D>().velocity.x >= 0){
					ballSpeedX = Random.Range(minX,maxX);
				}
				else{
					ballSpeedX = Random.Range(-maxX,minX);
				}
				
				tweak = new Vector2(ballSpeedX,ballSpeedY);
			}
		
		}
		
		// Ball does not trigger sound when brick is destroyed
		// Not 100% sure why, possibly because brick isn't there. 
		if (gameStarted){
			
			if (SoundFX.soundFXOn){
				source.Play();
			}
			
			// Keep the old speed of the ball
			float ballMagnitude = this.GetComponent<Rigidbody2D>().velocity.magnitude;
			Vector2 newBallVelocity = this.GetComponent<Rigidbody2D>().velocity + tweak;
			newBallVelocity = newBallVelocity.normalized * ballMagnitude;
			
			this.GetComponent<Rigidbody2D>().velocity = newBallVelocity;
		}
		
	}
	
	
	// Update is called once per frame
	void Update () {
	
		// While the game hasn't started.
		if (!gameStarted){
			
			// Lock the ball relative to the paddle.
			this.transform.position = paddle.transform.position + paddleToBallVector;
			
			// When the mouse button is clicked, add velocity to our ball 
			// and indicate that the game has started.
			if (Input.GetMouseButtonDown(0) && Paddle.useMouse){
				this.GetComponent<Rigidbody2D>().velocity = ballSpeed;
				gameStarted = true;
			}
			else if (Input.GetKeyDown(KeyCode.Space) && !Paddle.useMouse){
				this.GetComponent<Rigidbody2D>().velocity = ballSpeed;
				gameStarted = true;
			}
				
		
		}
		
		// If we lost a life, then reset the ball and make lifeLost false.
		if (loseCollider.lifeLost){
			gameStarted = false;
			loseCollider.lifeLost = false;
		}
	
	}
	
}
