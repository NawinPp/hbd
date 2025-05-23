import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-photos',
  imports: [],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent {
  ngOnInit(): void {
    AOS.init();
  }
}
