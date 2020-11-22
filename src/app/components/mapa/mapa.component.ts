import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MarcadorModel } from "src/app/interfaces/marcador.model";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MapaEditarComponent } from "./mapa-editar.component";

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.scss"],
})
export class MapaComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  marcadores: MarcadorModel[] = [];
  constructor(private _snackBar: MatSnackBar, private _dialog: MatDialog) {
    this.marcadores = this.getmarcadorLocalstorage();
  }

  ngOnInit(): void {}

  crearMarcador(evento) {
    let d: { lat: number; lng: number } = { lat: this.lat, lng: this.lng };
    if (evento != "c") {
      console.log({ evento });
      d = evento.coords;
    }
    let marcadorTemp: MarcadorModel = {
      lat: d.lat,
      lon: d.lng,
      titulo: "dsadasd a d",
      desc: "dasaaaaa lar",
    };
    this.marcadores.push(marcadorTemp);
    this.setmarcadorLocalstorage();
    this._snackBar.open("Marcador Agregado", "cerrar", { duration: 3000 });
  }
  borrarMarcador(i: number) {
    this.marcadores.splice(i, 1);
    this.setmarcadorLocalstorage();
    this._snackBar.open("Marcador borrado", "cerrar", { duration: 3000 });
  }
  editarMarcador(i: number) {
    //const { lat, lon, titulo, desc } = this.marcadores[i]
    const dialogRef = this._dialog.open(MapaEditarComponent, {
      width: "250px",
      data: { ...this.marcadores[i] },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      if (result == undefined) {
        return;
      }
      console.log(result);
      this.marcadores[i] = { ...result };
      this.setmarcadorLocalstorage();
    });
  }

  getmarcadorLocalstorage(): MarcadorModel[] {
    return JSON.parse(localStorage.getItem("marcador")) || [];
  }
  setmarcadorLocalstorage() {
    localStorage.setItem("marcador", JSON.stringify(this.marcadores));
  }
}
