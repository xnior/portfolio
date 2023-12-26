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
export class DialogProjectsComponent  {
  constructor( 
    @Inject(MAT_DIALOG_DATA) private _data: IProject,
    private _dialogRef: MatDialogRef<DialogProjectsComponent>,
    ) {}

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public getData = signal<IProject | null>(null);
  
  public closeDialog(){
    this._dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`)
      });
    return this._dialogRef.close();
  }
}
