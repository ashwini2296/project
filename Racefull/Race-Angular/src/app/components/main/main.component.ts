import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import { GameScore } from '../../class/gamescore';
import { AppService } from '../../services/app.service';
import { GameService } from '../../services/game.service';
import { ScoreService } from '../../services/score.service';
import { timer } from 'rxjs/observable/timer';

import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  destroy = new Subject();
	counter:number=0;

	timer=new GameScore();

	@ViewChild('canvas') public canvas: ElementRef;
	subscription: any;
	showLoader = true;

	constructor(
		private appService: AppService,
		private gameService: GameService,
		private scoreService: ScoreService
	) {}
	ngOnDestroy(): void {
		//throw new Error("Method not implemented.");
		this.addScore();
	}

	public ngAfterViewInit() {
		const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
		this.appService.createPlayGround(canvasEl);
		this.subscription = this.appService.getImageLoadEmitter()
			.subscribe((item) => {
				this.showLoader = false;
				this.gameService.startGameLoop();
			
			});
	}
   
	@HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
		this.appService.movePlayer(event, 'keydown');
	}

	@HostListener('document:keyup', ['$event']) onKeyupHandler(event: KeyboardEvent) {
		this.appService.movePlayer(event, 'keyup');
	}
	rxjsTimer = timer(1000, 1000);

  ngOnInit() {
    this.rxjsTimer.pipe(takeUntil(this.destroy)).subscribe(val => {
      this.counter = val;
      
	 
  })

	  }

	 
	  score =this.counter;
	
	  
		addScore(){	
			console.log(this.score, "This is from form")
			this.scoreService.addScore(this.timer).subscribe(data=>{
			  console.log(data);
			  alert(data);
			})
		  }
	

}
