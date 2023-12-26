import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperience.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperience[]>([{
    summary:{
      strong: 'Systems Engineer',
      p: 'Rockwell Collins Aviation',
      date: '2020 - Present',
      description: 'I work as an Engineer in the company Rockwell Collins Aviation, where I have been able to learn and improve my skills in the development of web applications with Angular, React and Vue, as well as in the development of systems with Java, C++, C#.',
      logo: 'assets/img/sofka.png'
    },text: 'I work as an Engineer in the company Rockwell Collins Aviation, where I have been able to learn and improve my skills in the development of web applications with Angular, React and Vue, as well as in the development of systems with Java, C++, C#.'
  }
])

}
