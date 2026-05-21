import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface Memory {
  type: 'image' | 'video';
  src: string;
  caption: string;
  /** กำหนดมุมเอียงเล็กน้อยให้ดูเป็นโพลารอยด์/สมุดความทรงจำ */
  tilt?: number;
}

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css',
})
export class PhotosComponent implements AfterViewInit, OnDestroy {
  @ViewChild('audioRef') audioRef!: ElementRef<HTMLAudioElement>;
  @ViewChild('photosSection') photosSection!: ElementRef<HTMLElement>;

  isPlaying = false;
  scrollProgress = 0;

  private observer?: IntersectionObserver;
  private onScroll = () => this.updateProgress();

  memories: Memory[] = [
    { type: 'image', src: 'assets/IMG_4868.jpeg', caption: 'รูปแรกที่ถ่ายกันและรู้จักกันครั้งแรก', tilt: -2 },
    { type: 'image', src: 'assets/IMG_5039.jpeg', caption: 'ผู้หญิงอะไรกินเหล้าเก่งคัก', tilt: 1.5 },
    { type: 'image', src: 'assets/IMG_5040.jpeg', caption: 'แต่ว่าทริปนี้ก็คือสนุกนะ', tilt: -1 },
    { type: 'video', src: 'assets/IMG_9272.mp4', caption: 'มึงก็ชอบเล่นน้ำเกิน เล่นจนตัวเปื่อยแล้วมั้ง', tilt: 2 },
    { type: 'image', src: 'assets/IMG_2465.PNG', caption: 'filter หมอกเกินน สมัยไลฟ์สด', tilt: -1.5 },
    { type: 'image', src: 'assets/IMG_5752.png', caption: 'รู้แหละว่าท้อใจที่กูถ่ายรูปให้ไม่ได้ดั่งใจ 5555', tilt: 1 },
    { type: 'image', src: 'assets/IMG_6030.png', caption: 'ขายาวมากแม่....', tilt: -2 },
    { type: 'image', src: 'assets/IMG_6270.png', caption: 'รูปนี้กูชอบมาก ธรรมชาติสุด สวยเกินนน', tilt: 1.5 },
    { type: 'image', src: 'assets/IMG_6274.png', caption: 'นี่ก็ธรรมชาติ 555', tilt: -1 },
    { type: 'image', src: 'assets/IMG_6290.png', caption: 'สวย น่ารัก แล้วก็บ่นเก่ง', tilt: 2 },
    { type: 'image', src: 'assets/IMG_6293.png', caption: 'เซ็กซี่สุดๆ รูปนี้', tilt: -1.5 },
    { type: 'image', src: 'assets/IMG_6302.png', caption: 'รูปที่เผลอๆ คือน่ารักมาก 555', tilt: 1 },
    { type: 'image', src: 'assets/IMG_6304.png', caption: 'นี่ก็เซ็กซี่ฉุดๆ', tilt: -2 },
    { type: 'image', src: 'assets/IMG_6337.png', caption: 'คมชัดสุดๆ 555', tilt: 1.5 },
    { type: 'image', src: 'assets/IMG_6343.png', caption: 'รอยยิ้มมีเสน่ห์เกิน', tilt: -1 },
    { type: 'image', src: 'assets/IMG_6360.png', caption: 'ยิ่งมองยิ่งน่ารัก 555', tilt: 2 },
    { type: 'image', src: 'assets/IMG_6405.png', caption: 'กว่าจะได้แต่ละรูป 555', tilt: -1.5 },
    { type: 'image', src: 'assets/IMG_6442.png', caption: 'รอยยิ้มนี้ที่มันดึงดูด', tilt: 1 },
    { type: 'image', src: 'assets/IMG_6453.png', caption: '555555555555', tilt: -2 },
    { type: 'image', src: 'assets/IMG_6460.png', caption: 'เริ่มไม่มีคำบรรยายละ 55', tilt: 1.5 },
    { type: 'image', src: 'assets/IMG_6461.png', caption: 'เอาเป็นว่าดูรูปไปเฉยๆ ล่ะกัน', tilt: -1 },
    { type: 'image', src: 'assets/IMG_6471.png', caption: 'กูแมร่งชอบทุกรูป 55', tilt: 2 },
    { type: 'image', src: 'assets/IMG_6421.png', caption: 'จังหวะที่ใช่ใครก็ชอบ 555', tilt: -1.5 },
    { type: 'image', src: 'assets/IMG_6401.png', caption: 'หน้าตอนที่มึงบ่นกูนี่คือน่ารักเกิน 55', tilt: 1 },
    { type: 'image', src: 'assets/IMG_6512.png', caption: 'หนึ่งวันพันเรื่อง 555 คนอะไรขี้ลืมเกิน', tilt: -2 },
    { type: 'image', src: 'assets/IMG_6557.png', caption: 'บรรยากาศกำลังดีกับคนที่น่ารักอย่างเธอ แต่คนอย่างเยอะ', tilt: 1.5 },
    { type: 'image', src: 'assets/IMG_6560.png', caption: 'บร๊ะ! รูปนี้สวยจริ้งงง', tilt: -1 },
    { type: 'image', src: 'assets/IMG_6571.png', caption: 'ฉ๊วยยยย ถ้ากูบอกไม่สวยก็ได้ไม่ เดี๋ยวมึงก็จะบอกว่า "มึงต้องพูดว่ากูสวยยยย"', tilt: 2 },
    { type: 'image', src: 'assets/IMG_6525.png', caption: 'ฉ๊วยยยย ภาคสอง 555', tilt: -1.5 },
    { type: 'image', src: 'assets/IMG_6515.png', caption: 'ฉ๊วยยยย ภาคสาม 555', tilt: 1 },
    { type: 'image', src: 'assets/tay1.JPG', caption: 'ฉ๊วยยยย ภาคสี่ 555', tilt: -2 },
    { type: 'video', src: 'assets/IMG_6700.mp4', caption: 'ขี้เหล้าจริงไม่อิงสตั้น', tilt: 1.5 },
    { type: 'video', src: 'assets/IMG_6698.mp4', caption: 'เอาสุดเกิน', tilt: -1 },
    { type: 'video', src: './assets/tay.MP4', caption: 'น่ารักเกิน', tilt: 2 },
  ];

  finalMessage = `สุดท้ายแล้ว กูอาจจะไม่มีของขวัญที่เป็นชิ้นให้มึงหรอกนะ แต่กูตั้งใจทำเว็บนี้ขึ้นมาให้มึงเลยนะ ถึงมันจะดูธรรมดาก็เถอะ แต่กูก็ตั้งใจทำ

กูขอให้มึงมีความสุขมากๆ นะ อย่าเจอเรื่องเศร้าใจ แต่ถ้ามึงเจอเรื่องที่ทำให้เศร้า และท้อใจ ขอให้รู้ไว้ว่ากูอยู่ตรงนี้นะ ข้างๆ มึง ที่ๆ มึงหันมาเมื่อไหร่ก็จะเจอกูเสมอ

กูจะคอยดูแลมึง คอยซัพพอร์ตมึงอยู่แบบนี้แหละ และจะพยายามเป็นที่ที่ทำให้มึงสบายใจ`;

  ngAfterViewInit(): void {
    // ลองเล่นเพลงอัตโนมัติ (browser มักบล็อก จึงต้องมีปุ่ม toggle ด้วย)
    const audio = this.audioRef.nativeElement;
    audio.volume = 0.4;
    audio
      .play()
      .then(() => (this.isPlaying = true))
      .catch(() => (this.isPlaying = false));

    // Reveal animation เมื่อเลื่อนมาเจอการ์ด
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => this.observer?.observe(el));

    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.updateProgress();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    window.removeEventListener('scroll', this.onScroll);
  }

  toggleMusic(): void {
    const audio = this.audioRef.nativeElement;
    if (audio.paused) {
      audio.play().then(() => (this.isPlaying = true));
    } else {
      audio.pause();
      this.isPlaying = false;
    }
  }

  scrollToPhotos(): void {
    this.photosSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  private updateProgress(): void {
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const total = h.scrollHeight - h.clientHeight;
    this.scrollProgress = total > 0 ? Math.min(100, (scrolled / total) * 100) : 0;
  }
}