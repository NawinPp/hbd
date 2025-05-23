import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-pageone',
  imports: [],
  templateUrl: './pageone.component.html',
  styleUrl: './pageone.component.css'
})
export class PageoneComponent implements OnInit, AfterViewInit{
  constructor(private router: Router) {}

  ngOnInit() {
    // AOS จะถูก initialize ทีหลังเพื่อรอ DOM โหลดครบ
  }

  // ngAfterViewInit(): void {
  //   AOS.init();
  //   AOS.refresh(); // สำหรับ dynamic content
  // }
  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,     // ความเร็ว
      // once: true,         // แสดงแอนิเมชันแค่ครั้งเดียวเมื่อเลื่อนถึง
    });
  }

  goToPhotos() {
    this.router.navigateByUrl('/photos');
  }
}
