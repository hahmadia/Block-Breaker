using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class MusicControl : MonoBehaviour {
	

	private MusicPlayer musicPlayer;
	

	void Start(){
		musicPlayer = GameObject.FindObjectOfType<MusicPlayer>();
		
	}
	
	public void TurnMusicOffOrOn () {
		
		if (Music.musicOn){
			musicPlayer.GetComponent<AudioSource>().mute = true;
			Music.musicOn = false;
		}
		else{
			musicPlayer.GetComponent<AudioSource>().mute = false;
			Music.musicOn = true;
		}
	
	}
	
	public void TurnSoundFXOffOrOn () {
		
		if (SoundFX.soundFXOn){
			SoundFX.soundFXOn = false;
		}
		else{
			SoundFX.soundFXOn = true;
		}
			
	}
	
}
