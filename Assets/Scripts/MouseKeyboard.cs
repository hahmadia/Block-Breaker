using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class MouseKeyboard : MonoBehaviour {
	
	public Text text;
	
	void Start(){
		
		if (Paddle.useMouse){
			text.text = "Play with keyboard instead";
		}
		else{
			text.text = "Play with mouse instead";
		}
	}
	
	public void UseKeyboardOrMouse(){
		
		if (Paddle.useMouse){
			Paddle.useMouse = false;
			text.text = "Play with mouse instead";
		}
		else{
			Paddle.useMouse = true;
			text.text = "Play with keyboard instead";
		}
	
	}
	
	
	
}
