import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent implements OnInit {
  videos=[{id:1,title:"video1",url:"./assets/week1/session-1/1-intro.mp4",thubnail:"../../assets/image/test.png"},
    {id:2,title:"video2",url:"./assets/week1/session-1/1-intro.mp4",thubnail:"../../assets/image/test.png"},
    {id:3,title:"video3",url:"./assets/week1/session-1/1-intro.mp4",thubnail:"../../assets/image/test.png"},
  ]
  sellectedVideo:any=null
  sellecteVideo(vedio:any){
    this.sellectedVideo=vedio
    console.log(this.sellectedVideo)
  }
  close(){
    this.sellectedVideo=null
  }
  constructor() { }

  ngOnInit(): void {
  }
}
