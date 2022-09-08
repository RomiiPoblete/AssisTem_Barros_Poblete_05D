import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes: Componente[]=[ 

    {
      icon: 'walk-outline',
      name:  'Inicio',
      redirecTo: '/inicio' 
    },

    {
      icon: 'sparkles-outline',
      name:  'Alert',
      redirecTo: '/alert' 
    },
    {
      icon:'paw-outline',
      name: 'Action-Sheet', 
      redirecTo: '/action-sheet'
    },
    {
      icon: 'rocket-outline',
      name: 'Card',
      redirecTo: '/card'

    },
    {
      icon: 'desktop-outline',
      name: 'Taller',
      redirecTo: '/taller'
    },
    {
      icon: 'flash-outline',
      name: 'Inputs',
      redirecTo: '/inputs'
    }
  ];
}
