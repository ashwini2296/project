import { Component, ElementRef, AfterViewInit, ViewChild, HostListener, OnDestroy  } from '@angular/core';
import { AppService } from './services/app.service';
import { GameService } from './services/game.service';
import {Subscription, Subject } from 'rxjs'
import { timer } from 'rxjs/observable/timer';

import {GameScore} from './class/gamescore';
import {ScoreService} from './services/score.service';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent   {
	
	 
	
	
}
