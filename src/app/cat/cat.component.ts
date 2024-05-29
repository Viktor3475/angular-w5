import { Component, inject } from '@angular/core';
import { CatApiService } from '../../services/cat.api';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.css'
})
export class CatComponent {

  private catAPI = inject(CatApiService);
  public valueCode: string = '';
  public imgLink: string = '';
  public img: any;
  public processCode(){
    this.img = this.catAPI.getCatByCode(this.valueCode);
    this.imgLink = this.catAPI.link;
  }
}
