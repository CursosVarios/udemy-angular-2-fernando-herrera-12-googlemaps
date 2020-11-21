import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MapaComponent } from "./mapa/mapa.component";
import { MaterialModule } from "../material.module";
/* import { AgmCoreModule } from "@agm/core"; */
//import { AppMapsModule } from "../app-maps.module";

const declarations = [MapaComponent];

@NgModule({
  declarations: [...declarations],
  imports: [
    CommonModule,
    MaterialModule,
    /* AgmCoreModule.forRoot({
      apiKey: "AIzaSyBBQEvawh6ZUmZF2vj_6KqX5QDoZaJj9dc",
    }), */
  ],
  exports: [...declarations],
})
export class ComponentsModule {}
