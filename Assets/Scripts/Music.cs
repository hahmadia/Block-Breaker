using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class Music : MonoBehaviour {
	
	public static bool musicOn = true;
	public Sprite on;
	public Sprite off;
		
	// Use this for initialization
	void Start () {
		
		if (musicOn){
			this.GetComponent<Image>().sprite = on;
		}
		else{
			this.GetComponent<Image>().sprite = off;
		}
		
	}
	
	// Update is called once per frame
	void Update () {
	
		if (musicOn){
			this.GetComponent<Image>().sprite = on ;
		}
		else{
			this.GetComponent<Image>().sprite = off;
		}
	
	}
}
