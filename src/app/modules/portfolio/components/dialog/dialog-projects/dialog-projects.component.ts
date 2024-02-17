import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  Signal,
  inject,
  signal,
} from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from "@angular/material/dialog";
import { IProject } from "../../../interface/IProject.iterface";
import { TypeAiService } from "../../../../services/type-ai.service";

@Component({
  selector: "app-dialog-projects",
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: "./dialog-projects.component.html",
  styleUrl: "./dialog-projects.component.scss",
})
export class DialogProjectsComponent implements OnInit, OnDestroy{
  #typeAiService =inject(TypeAiService);

  getData: IProject | null = null;
  typeAiArticle= signal("");
  flag: number = 0;
  titleDialog=signal("Descrição");

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: IProject,
    private _dialogRef: MatDialogRef<DialogProjectsComponent>,
    ) {}

  ngOnInit(): void {
    this.getData = this._data;
    this.#typeAiService.typeSignalArticle$.subscribe((res) => {
      this.typeAiArticle.set(res);
    });

    this.#typeAiService.startTyping(this.getData.description);
  }

  typeAi(data: string) {
    this.flag = 1;
    this.titleDialog.set('Histórico do Trabalho');
    this.#typeAiService.startTyping(data);
  }

  ngOnDestroy(): void {
    // Unsubscribe from observables to avoid memory leaks
    this.#typeAiService.typeSignalArticle$.subscribe();
  }

  closeDialog() {
    this.flag = 0;
    // this._dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
    this._dialogRef.close();
  }
}
