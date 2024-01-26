import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { ExperiencesService } from '../../../services/experiences.service';
import { IExperience } from '../../interface/IExperience.interface';
import { Observable, delay, observeOn, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate, query, stagger, group } from '@angular/animations';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeIn', [
      transition('*=>*', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-30px)' }),
          stagger(150, [
            group([
              animate('1s ease-in-out', style({ opacity: 1 })),
              animate('1s ease-in-out', style({ transform: 'none' })),
            ]),
          ]),
        ], { optional: true }),
      ]),
    ]),
  ],
})
export class ExperiencesComponent implements OnInit{
  #experiences = inject(ExperiencesService);
  
public list:IExperience[]=[]

  public experiencesArrayOb$(): Observable<IExperience[]> {
    return this.#experiences.readExperiences$;
  }
  
  ngOnInit(): void {
    this.#experiences.pregressiveRead();
  }
  
}

