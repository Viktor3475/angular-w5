import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FaviconApiService } from '../../services/favicon.api';

@Component({
  selector: 'app-favicon',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './favicon.component.html',
  styleUrl: './favicon.component.css'
})
export class FaviconComponent {

  public siteName: string = '';
  public favicon: any;
  public faviconLink: string = '';
  private faviconAPI: FaviconApiService = inject(FaviconApiService);
  public processSiteName(){
    this.favicon = this.faviconAPI.getFaviconByPageName(this.siteName);
    this.faviconLink = this.faviconAPI.link;
  }
}
