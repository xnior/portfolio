import { Component, OnInit, inject, signal } from "@angular/core";
import { IProject } from "../../interface/IProject.iterface";
import { MatDialog } from "@angular/material/dialog";

import { DialogProjectsComponent } from "../dialog/dialog-projects/dialog-projects.component";
import { MatButtonModule } from "@angular/material/button";
import { EDialogPanelClass } from "../../enum/EDialogPanelClass.enum";
import { arrayProjects } from "../../../../../assets/DB/projects";
import { CommonModule, I18nPluralPipe } from "@angular/common";
import { Observable, delay, of, tap } from "rxjs";
import { ApiService } from "../../../services/api.service";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent implements OnInit {
  public dialog = inject(MatDialog);
  #apiService = inject(ApiService);

  public loadArray$(): Observable<any[]>{return this.#apiService.readApiService$;};
  
  async ngOnInit(): Promise<void> {
    this.#apiService.readApiService$.subscribe();
    this.#apiService.progressiveRead();
    
  }
  
  
  public openDialog(data: IProject) {
    this.dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
