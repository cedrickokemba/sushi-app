import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Box } from '../../models/Box';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  boxes: Box[] = []

  constructor(private apiService: ApiService) {
    this.boxesApi();
  }

  boxesApi(): void {
    this.apiService.getBox().subscribe((res: any) => {
      for (let boxApi of res) {
        let box = new Box();
        box.id = boxApi.id;
        box.nom = boxApi.nom;
        box.saveurs = boxApi.saveurs;
        box.nbPieces = boxApi.nbPieces;
        box.image = boxApi.image;
        box.prix = boxApi.prix;
        box.aliments = boxApi.aliments;
        this.boxes.push(box);
        console.log(this.boxes);
      }
    })
  }
}