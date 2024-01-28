import { Component, OnInit, inject, signal } from "@angular/core";
import { IProject } from "../../interface/IProject.iterface";
import { MatDialog } from "@angular/material/dialog";

import { DialogProjectsComponent } from "../dialog/dialog-projects/dialog-projects.component";
import { MatButtonModule } from "@angular/material/button";
import { EDialogPanelClass } from "../../enum/EDialogPanelClass.enum";
import { CommonModule } from "@angular/common";
import { Observable, delay, of, tap } from "rxjs";
import { ApiService } from "../../../services/api.service";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserModule } from "@angular/platform-browser";
import { animate, group, query, stagger, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatProgressBarModule, BrowserModule],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
  animations: [
    trigger('anim', [
      transition('*=>*', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-30px)' }),
          stagger(100, [
            group([
              animate('1s ease-in-out', style({ opacity: 1 })),
              animate('1s ease-in-out', style({ transform: 'none' })),
            ]),
          ]),
        ], { optional: true }),
      ]),
    ]),
  ]
})
export class ProjectsComponent implements OnInit {
  public dialog = inject(MatDialog);
  #apiService = inject(ApiService);

  // public loadArray$(): Observable<any[]>{return this.#apiService.readApiService$;};

  public arrayLoad: IProject[] = []
  async ngOnInit(): Promise<any> {

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
