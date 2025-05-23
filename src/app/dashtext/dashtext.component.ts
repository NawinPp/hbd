import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashtext',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashtext.component.html',
  styleUrl: './dashtext.component.css',
})
export class DashtextComponent implements OnInit, OnDestroy {
  @ViewChild('bg', { static: true }) backgroundRef!: ElementRef;
  
  startPulse = false;
  stopPulse = false;
  showWish = false;
  showParagraph = false;
  private intervalId: any;

  constructor(private router: Router) {}

  birthdayText: string[] = Array.from('Happy BirthDay');
  wishMessage: string = `สุขสันต์วันเกิดนะครับคนเก่งของฉัน 🎂
ขอให้ปีนี้เป็นปีที่เต็มไปด้วยรอยยิ้ม เรื่องราวดีๆ และความสุขในทุกๆ วัน
ไม่ว่าเธอจะเจอกับอะไรก็ตาม ขอให้รู้ไว้นะ ว่าฉันจะอยู่ตรงนี้เสมอ...
คอยจับมือ คอยกอดแน่นๆ ในวันที่เธอรู้สึกอ่อนแอ
และคอยเป็นพลังใจให้เธอในทุกๆ ก้าวของชีวิต

ปีนี้ก็อายุ 25 แล้วนะ
โตขึ้นอีกปีนึงแล้ว อย่าลืมดูแลตัวเองดีๆ และใช้ชีวิตให้มีความหมาย
ฉันจะอยู่ตรงนี้… เป็นบ้านที่อบอุ่นให้เธอเสมอ 💗`;

  ngOnInit(): void {
    setTimeout(() => {
      this.startPulse = true;
    }, 1000);

    this.intervalId = setInterval(() => this.createBubble(), 100);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  showText() {
    // หยุดแอนิเมชัน และเริ่มแสดง wish
    this.stopPulse = true;
    this.showWish = true;

    // แสดงพารากราฟหลังจาก h1 แสดงครบ
    const delay = this.birthdayText.length * 100 + 1000;
    setTimeout(() => {
      this.showParagraph = true;
    }, delay);
  }

  goto() {
    this.router.navigateByUrl('/photos');
  }

  createBubble(): void {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const size = Math.random() * 20 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * window.innerWidth}px`;
    bubble.style.bottom = `-50px`;
    bubble.style.position = 'absolute';
    bubble.style.animationDuration = `${3 + Math.random() * 5}s`;

    const background = this.backgroundRef?.nativeElement;
    if (background) {
      background.appendChild(bubble);
      setTimeout(() => {
        bubble.remove();
      }, 8000);
    }
  }
  
}
