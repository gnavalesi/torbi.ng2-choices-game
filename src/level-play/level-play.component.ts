import {Component, Input, Output, EventEmitter} from '@angular/core';
import {GameProblem, GameLevel} from "../models";
import {ToolbarConfig} from "../commons/toolbar/toolbar.component";
import {GameStatusService} from "../services/game-status.service";

@Component({
  moduleId: module.id,
  selector: 'level-play',
  templateUrl: 'level-play.component.html',
  styleUrls: ['level-play.component.css']
})
export class PlayingLevelComponent {
  @Input() gameProblem:GameProblem;
  @Input() gameLevel:GameLevel;
  @Input() toolbarConfig:ToolbarConfig;
  @Output() isCorrect:EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private gameStatus:GameStatusService){}

  printProblem(){
    return JSON.stringify(this.gameLevel)
  }

  processAnswer(answer:string){
    let corrects = this.gameProblem.answer;

    if(corrects.some(correct => correct == answer)){
      corrects.splice(corrects.findIndex(correct => correct == answer), 1);
      if(corrects.length == 0){
        this.isCorrect.emit(true);
      }
    }else{
      this.isCorrect.emit(false);
    }
  }

  displayProblem(problemIndex:number){
    if(problemIndex == this.gameStatus.problem){
      return 'block';
    }else{
      return 'none';
    }
  }


}
