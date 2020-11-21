import { Component, OnInit } from "@angular/core";
import { MarcadorModel } from "src/app/interfaces/marcador.model";

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.scss"],
})
export class MapaComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  marcadores: MarcadorModel[] = [];
  constructor() {
    this.marcadores = this.getmarcadorLocalstorage();
  }

  ngOnInit(): void {}

  crearMarcador(evento) {
    let d: { lat: number; lng: number } = {};
    if (evento == "c") {
      console.log({ evento });
      d.lng = this.lng;
      d.lat = this.lat;
    } else {
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
  }
  borrarMarcador(i: number) {
    this.marcadores.splice(i, 1);
    this.setmarcadorLocalstorage();
  }
  editarMarcador(i: number) {}

  getmarcadorLocalstorage(): MarcadorModel[] {
    return JSON.parse(localStorage.getItem("marcador")) || [];
  }
  setmarcadorLocalstorage() {
    localStorage.setItem("marcador", JSON.stringify(this.marcadores));
  }
}
