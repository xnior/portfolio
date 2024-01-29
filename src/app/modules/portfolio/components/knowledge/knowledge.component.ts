import { Component, signal } from "@angular/core";
import { IKnowledge } from "../../interface/IKnowledge.interface";
import { loadingAnimation } from "../../../../animations/animation";

@Component({
  selector: "app-knowledge",
  standalone: true,
  imports: [],
  templateUrl: "./knowledge.component.html",
  styleUrl: "./knowledge.component.scss",
  animations:[loadingAnimation]
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: "assets/img/icons/angular.svg",
      alt: "Angular",
    },
    
    {
      src: "assets/img/icons/css3.svg",
      alt: "CSS3",
    },
    {
      src: "assets/img/icons/html5.svg",
      alt: "HTML5",
    },
    {
      src: "assets/img/icons/javascript.svg",
      alt: "JavaScript",
    },
    {
      src: "assets/img/icons/nodejs.svg",
      alt: "NodeJS",
    },
  ]);
}
