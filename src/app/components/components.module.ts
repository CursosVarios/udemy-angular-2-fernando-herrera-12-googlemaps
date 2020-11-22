import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MapaComponent } from "./mapa/mapa.component";
import { MaterialModule } from "../material.module";
import { AppMapsModule } from "../app-maps.module";
import { MapaEditarComponent } from "./mapa/mapa-editar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const declarations = [MapaComponent, MapaEditarComponent];

@NgModule({
  entryComponents: [MapaEditarComponent],
  declarations: [...declarations],
  imports: [
    CommonModule,
    MaterialModule,
    AppMapsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [...declarations],
})
export class ComponentsModule {}
