import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MapaComponent } from "./mapa/mapa.component";
import { MaterialModule } from "../material.module";
import { AppMapsModule } from "../app-maps.module";

const declarations = [MapaComponent];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, MaterialModule, AppMapsModule],
  exports: [...declarations],
})
export class ComponentsModule {}
