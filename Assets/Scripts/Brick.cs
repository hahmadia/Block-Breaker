using UnityEngine;
using System.Collections;

public class Brick : MonoBehaviour {
	
	public GameObject brickExplosion;
	public AudioClip brickSound;
	public Sprite[] hitSprites;
	public static int breakableCount = 0;
			
	private int timesHit = 0;
	private LevelManager levelManager;
	private bool isBreakable;
	
	
	void Start(){
		isBreakable = (this.tag == "Breakable");
		
		// Keep track of how many breakable bricks there are
		if (isBreakable){
			breakableCount++;
		}
		
		levelManager = GameObject.FindObjectOfType<LevelManager>();
		
	}
	
	void OnCollisionEnter2D (Collision2D collision){
		
		if (SoundFX.soundFXOn){		
			AudioSource.PlayClipAtPoint(brickSound,transform.position,1);
		}
		
		// If the block is breakable, then handle its hits and let it decay
		if (isBreakable){
			HandleHits();
		}		
	}
	
	void HandleHits () {
		timesHit++;
		int maxHits = hitSprites.Length + 1;
		
		// If the times the brick has been hit matches the maximum number of hits the brick should take
		// Then we destroy (Remove) the brick from the game.
		if (timesHit >= maxHits){
			breakableCount--;
			GameObject explosion = Instantiate(brickExplosion,this.transform.position,Quaternion.identity) as GameObject;
			
			if (hitSprites.Length == 0){
				explosion.GetComponent<ParticleSystem>().startColor = Color.green;
			}
			else if (hitSprites.Length == 1){
				explosion.GetComponent<ParticleSystem>().startColor = Color.cyan;
			}
			else{
				explosion.GetComponent<ParticleSystem>().startColor = Color.red;
			}
			
			
			Destroy (gameObject);
			levelManager.BrickDestroyed();
		}
		else{
			LoadSprites();
		}
	}
	
	void LoadSprites(){
		int spriteIndex = timesHit - 1;
		
		// If a sprite at the index position exist, then load. Otherwise, keep the sprite your at.
		if (hitSprites[spriteIndex]){
			this.GetComponent<SpriteRenderer>().sprite = hitSprites[spriteIndex];
		}
		else{
			Debug.LogError("SPRITE MISSING!");
		}
		
		
	}
	
}
