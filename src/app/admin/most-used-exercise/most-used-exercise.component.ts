import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { SpiritualExercise } from 'src/app/models/SpiritualExercise';
import { User } from 'src/app/models/User';
import { SpiritualExerciseService } from 'src/app/services/spiritualExercise.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-most-used-exercise',
  templateUrl: './most-used-exercise.component.html',
  styleUrls: ['./most-used-exercise.component.scss'],
})
export class MostUsedExerciseComponent implements OnInit {
  typeExercise: string;
  spiritualExercises: SpiritualExercise[];
  usersByTypeExercise: User[];
  totalContemplations = 0;
  totalPauses = 0;

  // Trozos del pastel - Etiquetas
  public pieChartLabels: Label[] = [
    'Contemplaciones ignacianas',
    'Pausas ignacianas',
  ];

  // Trozos del pastel - Cantidades
  public pieChartData: number[] = [];

  // Trozos del pastel - Colores
  public pieChartColors = [
    {
      backgroundColor: [
        //'rgb(253,159,179)',
        'rgb(246, 87, 110)',
        //'rgba(132,197,241)',
        'rgb(31, 176, 195)',
        'rgba(253,224,152)',
        'rgba(175,244,175)',
      ],
    },
  ];

  // Opciones de la gráfica
  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      /*       text: 'Ejercicio espiritual más usado',
      fontSize: 20,
      fontColor: 'rgba(0,0,0,1)',
      display: true, */
    },
    legend: {
      position: 'bottom',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
        color: 'rgb(204, 233, 241)',
      },
    },
  };

  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;

  constructor(
    private spiritualExerciseService: SpiritualExerciseService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.spiritualExerciseService
      .getSpiritualExercisesByType(this.typeExercise)
      .subscribe(
        (results) => {
          this.spiritualExercises = results;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  recibiRespuesta(mensaje: string): void {
    this.typeExercise = mensaje;
    this.spiritualExerciseService
      .getSpiritualExercisesByType(this.typeExercise)
      .subscribe(
        (results) => {
          this.spiritualExercises = results;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  findUsersByTypeExercise(): void {
    const users = this.userService.getUsers();
    for (let i in users) {
      const exercisesOfUser =
        this.spiritualExerciseService.getSpiritualExercisesByUser(
          users[i].getListIdsCompletedExercises()
        );
      for (let j in exercisesOfUser) {
        if (exercisesOfUser[j].type == 'contemplation')
          this.totalContemplations++;
        else if (exercisesOfUser[j].type == 'pause') this.totalPauses++;
      }
    }
    this.pieChartData.push(this.totalContemplations);
    this.pieChartData.push(this.totalPauses);
  }
}
