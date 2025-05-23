import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.css',
})
export class DashComponent {
  isFloating = false;
  birthdayCode: string = '';

  constructor(private router: Router) {}

  onClick() {
    if (this.birthdayCode === '30072000') {
      this.isFloating = true;

      // รอ 2 วินาทีให้บอลลูนลอยก่อนเปลี่ยนหน้า
      setTimeout(() => {
        this.router.navigate(['/dash']); // เปลี่ยนเส้นทางตามที่คุณต้องการ
      }, 2000);
    } else {
      alert('รหัสไม่ถูกต้องจ้าาา');
    }
  }
}
