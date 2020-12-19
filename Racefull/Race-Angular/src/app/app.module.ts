import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppService } from './services/app.service';
import { GameService } from './services/game.service';
import {ScoreService} from './services/score.service'
import { TimerPipe } from './utility/timer.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';


@NgModule({
	declarations: [
		AppComponent,
	
		TimerPipe,
	
		MainComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule
		
	],
	providers: [AppService, GameService,ScoreService],
	bootstrap: [AppComponent]
})
export class AppModule { }
