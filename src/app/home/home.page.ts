import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonButtons, IonMenuButton, IonImg, IonAvatar, IonSearchbar, IonChip, IonCardHeader, IonCardContent, IonCard, IonCardTitle, IonCardSubtitle, IonButton, IonItem, IonLabel } from '@ionic/angular/standalone';
import { PersonajesService, Personaje } from '../personajes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonButton, IonCardSubtitle, IonCardTitle, IonCard, IonCardContent, IonCardHeader, IonChip, IonSearchbar, IonImg, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonButtons, IonMenuButton, IonAvatar],
})
export class HomePage implements OnInit {
  private readonly personajesService = inject(PersonajesService)
  personajes: Personaje[] = [];
  constructor() {}

  ngOnInit(): void {
      this.personajesService.cargar().subscribe( res => {
      this.personajes = res
      });
  }
}
