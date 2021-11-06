import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Position } from 'src/app/models/Position';
import { SpiritualExercise } from 'src/app/models/SpiritualExercise';
import { communicationActiveUser } from 'src/app/services/communicationActiveUser.service';
import { ContTileMapService } from 'src/app/services/cont-tile-map.service';
import { SpiritualExerciseService } from 'src/app/services/spiritualExercise.service';

@Component({
  selector: 'app-pause-list',
  templateUrl: './pause-list.component.html',
  styleUrls: ['./pause-list.component.scss'],
})
export class PauseListComponent implements OnInit {

  positions : Position[];
  foundPause : SpiritualExercise;
  activeUser: string;
  color: string;
  completedExercises: SpiritualExercise[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router /*private contemplationMap: MapService*/,
    private _spiritualExerciseService: SpiritualExerciseService,
    private _communicationActiveUser: communicationActiveUser,
  ) {
  }

  ngOnInit(): void {
    this._spiritualExerciseService.getPositions()
      .subscribe(
        (result)=>{
          this.positions=result;
          console.log(this.positions);       
        }
      );
      this._spiritualExerciseService.getSpiritualExercisesByUserAndType(this.activeUser,"pause")
      .subscribe(
        (result)=>{
          this.completedExercises = result;
          console.log(this.completedExercises);
          for(let obj of this.completedExercises){
            this._spiritualExerciseService.getSpiritualExerciseByDayAndType(obj.dayIndex,"pause")
                .subscribe(
                  (result2)=>{
                    this.foundPause = result2;
                    for(let i = 0; i<this.positions.length; i++){
                      if(obj._id == this.foundPause._id){
                        if(this.positions[i].name == this.foundPause.dayIndex){
                          this.positions[i].completed = 'true';
                          this.positions[i].disable = 'false';
                        }
                        if(i == this.completedExercises.length){
                          this.positions[i].completed = 'false';
                          this.positions[i].disable = 'false';
                        }
                      }
                    }

                  },
                  (error2) => {
                    console.log(error2);
                  }
              )
          }
        },
        (error) => {
          console.log(error);
        }
      )
    
    console.log(this.activeUser);
  }

  navSpiritualExcercise(dia: string) {
    console.log(dia);
    this._spiritualExerciseService.getSpiritualExerciseByDayAndType(dia,"pause")
      .subscribe(
        (result)=>{
          this.foundPause = result;
          console.log(this.foundPause);
          this.router.navigate(['/pauseExercise/'+this.foundPause._id]);
        },
        (error) => {
          console.log(error);
        }
    )
  }
}
