import { trigger, transition, query, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { loadingAnimation } from '../../../../animations/animation';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [loadingAnimation]
})

export class HeaderComponent {
  public className = 'blur';
  public classNameEmail = 'blur';
  timerTel: number  = 0;
  public classTimerTel = 'hidden';
  timerEmail: number  = 0;
  public classTimerEmail = 'hidden';

  public reversiveTelTimer() {
    this.timerTel = 5;
    this.classTimerTel = 'visible';
    const timer = setInterval(() => {
      this.timerTel! -= 0.1;
      if (this.timerTel! <= 0.3) {
        clearInterval(timer);
        this.classTimerTel = 'hidden';
      }
    }, 100);
  }

  public reversiveEmailTimer() {

    this.timerEmail = 5;
    this.classTimerEmail = 'visible';
    const timer = setInterval(() => {
      this.timerEmail! -= 0.1;
      if (this.timerEmail! <= 0.3) {
        clearInterval(timer);
        this.classTimerEmail = 'hidden';
      }
    }, 100);
  }

  public changeClass() {

    if (this.className == 'blur') {
      this.className = 'unblur';
      setTimeout(() => this.className = 'blur', 5000);
      this.reversiveTelTimer();
    }
  }
  public changeClassEmail() {

    if (this.classNameEmail == 'blur') {
      this.classNameEmail = 'unblur';
      setTimeout(() => this.classNameEmail = 'blur', 5000);
      this.reversiveEmailTimer();
    }
  }
}