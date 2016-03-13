using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class SoundFX : MonoBehaviour {
	
	public static bool soundFXOn = true;
	
	public Sprite on;
	public Sprite off;
	
	
	// Use this for initialization
	void Start () {
			
		if (soundFXOn){
			this.GetComponent<Image>().sprite = on;
		}
		else{
			this.GetComponent<Image>().sprite = off;
		}
		
	}
	
	void Update(){
		
		if (soundFXOn){
			this.GetComponent<Image>().sprite = on ;
		}
		else{
			this.GetComponent<Image>().sprite = off;
		}
	
	}
	
	
}
