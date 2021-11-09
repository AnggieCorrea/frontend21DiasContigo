import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { ContemplationConsideration } from 'src/app/models/ContemplationConsideration';
import { SpiritualExercise } from 'src/app/models/SpiritualExercise';
import { User } from 'src/app/models/User';
import { ContemplationConsiderationService } from 'src/app/services/contemplationConsideration.service';
import { SpiritualExerciseService } from 'src/app/services/spiritualExercise.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-most-used-consideration',
  templateUrl: './most-used-consideration.component.html',
  styleUrls: ['./most-used-consideration.component.scss'],
})
export class MostUsedConsiderationComponent implements OnInit {
  typeExercise: string;
  spiritualExercises: SpiritualExercise[];
  usersByTypeExercise: User[];
  contemplationConsiderations: ContemplationConsideration[];
  totalRecordings = 0;
  totalTexts = 0;

  // Trozos del pastel - Etiquetas
  public pieChartLabels: Label[] = ['Reflexión grabada', 'Reflexión escrita'];

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
    private userService: UserService,
    private contemplationConsiderationService: ContemplationConsiderationService
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
    this.findTypesContemplationConsideration();
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

  findTypesContemplationConsideration(): void {
    this.contemplationConsiderationService
      .getContemplationConsideration()
      .subscribe(
        (results) => {
          this.contemplationConsiderations = results;
          console.log(this.contemplationConsiderations);
          for (let j in this.contemplationConsiderations) {
            if (this.contemplationConsiderations[j].type == 'recording')
              this.totalRecordings++;
            else if (this.contemplationConsiderations[j].type == 'text')
              this.totalTexts++;
          }
          this.pieChartData.push(this.totalRecordings);
          this.pieChartData.push(this.totalTexts);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
