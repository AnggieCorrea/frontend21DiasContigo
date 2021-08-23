import { Component, OnInit } from '@angular/core';
declare var $: any;
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-microphone-recorder',
  templateUrl: './microphone-recorder.component.html',
  styleUrls: ['./microphone-recorder.component.scss']
})
export class MicrophoneRecorderComponent implements OnInit {

  title = 'micRecorder';
  
    //Lets declare Record OBJ
    record:any;
    //Will use this flag for toggeling recording
    recording = false;
    //URL of Blob
    url:any;
    error:any;
    constructor(private domSanitizer: DomSanitizer) {
    }
    sanitize(url: string) {
      return this.domSanitizer.bypassSecurityTrustUrl(url);
    }
    /**
     * Start recording.
     */
    Recording() {
  
      this.recording = true;
      let mediaConstraints = {
        video: false,
        audio: true
      };
      navigator.mediaDevices
        .getUserMedia(mediaConstraints)
        .then(this.successCallback.bind(this), this.errorCallback.bind(this));
    }
    /**
     * Will be called automatically.
     */
    successCallback(stream:any) {
      var options = {
        mimeType: "audio/wav",
        numberOfAudioChannels: 1,
        sampleRate: 50000,
      };
      //Start Actuall Recording
      var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
      this.record = new StereoAudioRecorder(stream, options);
      this.record.record();
    }
    /**
     * Stop recording.
     */
    Stop() {
      this.recording = false;
      this.record.stop(this.processRecording.bind(this));
    }
    Reset(){
      
    }
    /**
     * processRecording Do what ever you want with blob
     * @param  {any} blob Blog
     */
    processRecording(blob:any) {
      this.url = URL.createObjectURL(blob);
      console.log("blob", blob);
      console.log("url", this.url);
    }
    /**
     * Process Error.
     */
    errorCallback(erro:any) {
      this.error = 'Can not play audio in your browser';
    }
    ngOnInit() {
  
    }
}
