import { Component, Inject, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { MarcadorModel } from "src/app/interfaces/marcador.model";
@Component({
  selector: "app-mapa-editar",
  templateUrl: "./mapa-editar.component.html",
  styleUrls: ["./mapa-editar.component.scss"],
})
export class MapaEditarComponent implements OnInit {
  public forma: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MarcadorModel,
    private _fb: FormBuilder
  ) {
    console.log(data);
  }

  ngOnInit(): void {
    this.forma = this._fb.group({
      titulo: this.data.titulo,
      desc: this.data.desc,
      lat: this.data.lat,
      lon: this.data.lon,
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  change(): void {
    this.forma.value.lat = parseFloat(this.forma.value.lat);
    this.forma.value.lon = parseFloat(this.forma.value.lon);
    this.data = this.forma.value;
    this.dialogRef.close(this.data);
  }
}
