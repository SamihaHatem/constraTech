import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'constraTech';

  @ViewChild('videoPlayer') videoPlayer: any;
  autoPlayFlag = true;

  ngAfterViewInit() {
    // Check if video is muted and play it
    const videoElement = this.videoPlayer.nativeElement;
    videoElement.muted = true; // Ensure video is muted
    videoElement.play();       // Trigger autoplay
  }

}
