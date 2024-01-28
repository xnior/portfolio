import { Component, OnInit, inject, signal } from "@angular/core";
import { IProject } from "../../interface/IProject.iterface";
import { MatDialog } from "@angular/material/dialog";

import { DialogProjectsComponent } from "../dialog/dialog-projects/dialog-projects.component";
import { MatButtonModule } from "@angular/material/button";
import { EDialogPanelClass } from "../../enum/EDialogPanelClass.enum";
import { CommonModule } from "@angular/common";
import { Observable, delay, of, tap } from "rxjs";
import { ApiService } from "../../../services/api.service";
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatProgressBarModule],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent implements OnInit {
  public dialog = inject(MatDialog);
  #apiService = inject(ApiService);

  // public loadArray$(): Observable<any[]>{return this.#apiService.readApiService$;};

  public arrayLoad:IProject[]=[]
  async ngOnInit():Promise<any> {

    // this.#apiService.readApiService$.subscribe();
    
    this.arrayLoad = await this.#apiService.progressiveRead();
      // console.log(this.arrayLoad);
  }
  
  
  public openDialog(data: IProject) {
    this.dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
