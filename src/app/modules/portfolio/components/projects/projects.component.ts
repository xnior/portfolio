import { Component, signal } from "@angular/core";
import { IProject } from "../../interface/IProject.iterface";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent {
  public arrayProjects = signal<IProject[]>([
    {
      src: "assets/img/projects/vfull.svg",
      alt: "VFull",
      title: "VFull",
      width: "100px",
      height: "51px",
      description:
        "VFull es una plataforma de video streaming que permite a los usuarios crear y compartir contenido en vivo.",
      links: {
        name: "Ver proyecto",
        href: "https://vfull.io/",
      },
    },
    {
      src: "assets/img/projects/medic.svg",
      alt: "Medic",
      title: "Medic",
      width: "100px",
      height: "51px",
      description:
        "Medic es una plataforma de video streaming que permite a los usuarios crear y compartir contenido en vivo.",
      links: {
        name: "Ver proyecto",
        href: "https://medic.com/",
      },
    },
    {
      src: "assets/img/projects/medic.svg",
      alt: "Medic",
      title: "Medic",
      width: "100px",
      height: "51px",
      description:
        "Medic es una plataforma de video streaming que permite a los usuarios crear y compartir contenido en vivo.",
      links: {
        name: "Ver proyecto",
        href: "https://medic.com/",
      },
    },
    {
      src: "assets/img/projects/medic.svg",
      alt: "Medic",
      title: "Medic",
      width: "100px",
      height: "51px",
      description:
        "Medic es una plataforma de video streaming que permite a los usuarios crear y compartir contenido en vivo.",
      links: {
        name: "Ver proyecto",
        href: "https://medic.com/",
      },
    },
    {
      src: "assets/img/projects/medic.svg",
      alt: "Medic",
      title: "Medic",
      width: "100px",
      height: "51px",
      description:
        "Medic es una plataforma de video streaming que permite a los usuarios crear y compartir contenido en vivo.",
      links: {
        name: "Ver proyecto",
        href: "https://medic.com/",
      },
    },
    {
      src: "assets/img/projects/medic.svg",
      alt: "Medic",
      title: "Medic",
      width: "100px",
      height: "51px",
      description:
        "Medic es una plataforma de video streaming que permite a los usuarios crear y compartir contenido en vivo.",
      links: {
        name: "Ver proyecto",
        href: "https://medic.com/",
      },
    },
  ]);
}
