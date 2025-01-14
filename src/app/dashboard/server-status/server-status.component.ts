import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit,OnDestroy {
  currentStatus:'online'|'offline'|'unknown' = 'online';
  private interval?:ReturnType<typeof setInterval>;

  ngOnInit() {
    console.log('Bro,you Init');
    this.interval=setInterval(()=>{
      const rnd=Math.random();
      if(rnd<0.5){ this.currentStatus = 'online'; }
      else if(rnd<0.9){ this.currentStatus = 'offline'; }
      else this.currentStatus = 'unknown';
    },5000)
  }

  ngAfterViewInit(){
    console.log('Bro,you Inited');
  }
  ngOnDestroy() {
    clearTimeout(this.interval);
  }


}
