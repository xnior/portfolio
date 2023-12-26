import { Component, Inject, OnInit, signal } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { IProject } from "../../../interface/IProject.iterface";

@Component({
  selector: "app-dialog-projects",
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: "./dialog-projects.component.html",
  styleUrl: "./dialog-projects.component.scss",
})
export class DialogProjectsComponent implements OnInit {
  constructor( 
    private _dialogRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IProject
    ) {}

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public getData = signal<IProject | null>(null);
  
  public closeModal(){
    return this._dialogRef.close();
  }
}
