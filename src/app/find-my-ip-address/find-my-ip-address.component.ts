import { Component, inject } from '@angular/core';
import { FindMyIPApiService } from '../../services/myip.api';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-find-my-ip-address',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './find-my-ip-address.component.html',
  styleUrl: './find-my-ip-address.component.css'
})
export class FindMyIpAddressComponent {

  private myIPAPI: FindMyIPApiService = inject(FindMyIPApiService);
  public textIP: string = '';
  public processIP(): void{
    this.myIPAPI.getMyIP().subscribe(res =>{
      this.textIP = res;
    });

  }
}
