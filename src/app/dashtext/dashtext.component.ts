import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashtext',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashtext.component.html',
})
export class DashtextComponent implements OnInit, OnDestroy {
  @ViewChild('bg', { static: true }) backgroundRef!: ElementRef;

  showWish = false;
  showParagraph = false;
  private intervalId: any;

  birthdayText: string[] = Array.from('Happy BirthDay');
  wishMessage = `สุขสันต์วันเกิดนะครับคนเก่งของฉัน 🎂
ขอให้ปีนี้เป็นปีที่เต็มไปด้วยรอยยิ้ม เรื่องราวดีๆ และความสุขในทุกๆ วัน
ไม่ว่าเธอจะเจอกับอะไรก็ตาม ขอให้รู้ไว้นะ ว่าฉันจะอยู่ตรงนี้เสมอ...
คอยจับมือ คอยกอดแน่นๆ ในวันที่เธอรู้สึกอ่อนแอ
และคอยเป็นพลังใจให้เธอในทุกๆ ก้าวของชีวิต

ปีนี้ก็อายุ 25 แล้วนะ
โตขึ้นอีกปีนึงแล้ว อย่าลืมดูแลตัวเองดีๆ และใช้ชีวิตให้มีความหมาย
ฉันจะอยู่ตรงนี้… เป็นบ้านที่อบอุ่นให้เธอเสมอ 💗`;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.intervalId = setInterval(() => this.createBubble(), 150);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  showText(): void {
    this.showWish = true;
    const delay = this.birthdayText.length * 100 + 800;
    setTimeout(() => (this.showParagraph = true), delay);
  }

  goto(): void {
    this.router.navigateByUrl('/photos');
  }

  createBubble(): void {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const size = Math.random() * 22 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * window.innerWidth}px`;
    bubble.style.bottom = `-50px`;
    bubble.style.position = 'absolute';
    bubble.style.animationDuration = `${4 + Math.random() * 5}s`;

    const background = this.backgroundRef?.nativeElement;
    if (background) {
      background.appendChild(bubble);
      setTimeout(() => bubble.remove(), 9500);
    }
  }
}