import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { SpiritualExercise } from 'src/app/models/SpiritualExercise';
import { User } from 'src/app/models/User';
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
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.spiritualExercises =
      this.spiritualExerciseService.getSpiritualExercisesByType(
        this.typeExercise
      );
    this.findTypesContemplationConsideration();
  }

  recibiRespuesta(mensaje: string): void {
    this.typeExercise = mensaje;
    this.spiritualExercises =
      this.spiritualExerciseService.getSpiritualExercisesByType(
        this.typeExercise
      );
  }

  findTypesContemplationConsideration(): void {
    const users = this.userService.getUsers();
    for (let i in users) {
      const contemplationConsideration1 =
        users[i].getContemplationConsiderationList();
      for (let j in contemplationConsideration1) {
        if (contemplationConsideration1[j].type == 'recording')
          this.totalRecordings++;
        else if (contemplationConsideration1[j].type == 'text')
          this.totalTexts++;
      }
    }
    this.pieChartData.push(this.totalRecordings);
    this.pieChartData.push(this.totalTexts);
  }
}
