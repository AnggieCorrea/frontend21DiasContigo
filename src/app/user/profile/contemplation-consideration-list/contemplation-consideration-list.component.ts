import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationTypeOfConsiderationContemService } from 'src/app/services/communication-type-of-consideration-contem.service';

@Component({
  selector: 'app-contemplation-consideration-list',
  templateUrl: './contemplation-consideration-list.component.html',
  styleUrls: ['./contemplation-consideration-list.component.scss'],
})
export class ContemplationConsiderationListComponent implements OnInit {
  /* */
  contemplaciones: any[] = [];
  typeConsideration: string;

  constructor(private router: Router, private communicationServiceConsideration: CommunicationTypeOfConsiderationContemService) {
    this.contemplaciones = Array.from(Array(21).keys()).map((numeroDia) => {
      return {
        nombre: `Día ${numeroDia + 1}`,
        titulo: `Título`,
        fecha: `${numeroDia + 1}/sept/2021`,
      };
    });
  }

  ngOnInit(): void {
    this.communicationServiceConsideration.sendTypeConsiderationObservable.subscribe((typeConsideration)=>{
      typeConsideration = this.typeConsideration;
    });
  }

  myConsiderationAudio():void{
    this.communicationServiceConsideration.setTypeConsideration('audio');
    this.router.navigate(['/contemplationConsideration']);
  }

  myConsiderationText():void{
    this.communicationServiceConsideration.setTypeConsideration('texto');
    this.router.navigate(['/contemplationConsideration']);
  }

}
