import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//material
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatCardModule } from "@angular/material/card";
const mateiaModule = [
  MatToolbarModule,
  MatButtonModule,
  MatProgressBarModule,
  MatCardModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...mateiaModule],
  exports: [...mateiaModule],
})
export class MaterialModule {}
