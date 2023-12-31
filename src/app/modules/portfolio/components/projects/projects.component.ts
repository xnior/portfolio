import { Component, inject, signal } from "@angular/core";
import { IProject } from "../../interface/IProject.iterface";
import { MatDialog } from "@angular/material/dialog";

import { DialogProjectsComponent } from "../dialog/dialog-projects/dialog-projects.component";
import { MatButtonModule } from "@angular/material/button";
import { EDialogPanelClass } from "../../enum/EDialogPanelClass.enum";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent {
  constructor(public dialog: MatDialog) {}
  public arrayProjects = signal<IProject[]>([
    {
      src: "assets/img/projects/img_1.jpg",
      alt: "VFull",
      title: "VFull",
      width: "160px",
      height: "160px",
      description:
        "VFull é uma plataforma de streaming de vídeo que permite aos usuários criar e compartilhar conteúdo ao vivo.",
      links: [
        {
          name: "Ver projeto",
          href: "#",
        },
      ],
    },
    {
      src: "assets/img/projects/img_2.jpg",
      alt: "Angular",
      title: "Angular",
      width: "160px",
      height: "160px",
      description:
        "Angular é um sistema de design de código aberto para criar aplicativos da Web.",
      links: [
        {
          name: "Ver Projeto",
          href: "#",
        },
      ],
    },
    {
      src: "assets/img/projects/img_3.jpg",
      alt: "CSS",
      title: "CSS",
      width: "160px",
      height: "160px",
      description:
        "CSS é um código de linguagem de estilo usado para descrever a apresentação de um documento escrito em uma linguagem de marcação.",
      links: [
        {
          name: "Ver Projeto",
          href: "#",
        },
      ],
    },
    {
      src: "assets/img/projects/img_4.jpg",
      alt: "SCSS",
      title: "SCSS",
      width: "160px",
      height: "160px",
      description:
        "SCSS é uma linguagem de folha de estilo que é compilada em CSS. SCSS é a versão mais recente do SASS (Syntactically Awesome Style Sheets).",
      links: [
        {
          name: "Ver Projeto",
          href: "#",
        },
      ],
    },
    {
      src: "assets/img/projects/img_5.jpg",
      alt: "HTML5",
      title: "HTML5",
      width: "160px",
      height: "160px",
      description:
        "HTML5 é uma linguagem de marcação usada para estruturar e apresentar conteúdo na World Wide Web. É a quinta e última versão principal da tecnologia HTML.",
      links: [
        {
          name: "Ver Projeto",
          href: "#",
        },
      ],
    },
    {
      src: "assets/img/projects/img_6.jpg",
      alt: "Javascript",
      title: "Javascipt",
      width: "160px",
      height: "160px",
      description:
        "Javascript desenvolveu-se a partir de uma ideia simples: trazer a programação para o navegador do usuário, reduzindo a dependência de aplicativos da Web do servidor.",
      links: [
        {
          name: "Ver Projeto",
          href: "#",
        },
      ],
    },
  ]);
  public openDialog(data: IProject) {
    this.dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
