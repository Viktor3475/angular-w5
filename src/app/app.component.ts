import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CatComponent } from './cat/cat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang-hw5';
  
  private router = inject(Router);

  public onCatClick(){
    this.router.navigate(['/cat']);
  }

  public onFaviconClick(){
    this.router.navigate(['/favicon']);
  }

  public onMyIPClick(){
    this.router.navigate(['/myip']);
  }

}
