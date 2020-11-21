import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//material
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from "@angular/material/progress-bar";

const mateiaModule = [MatToolbarModule, MatButtonModule, MatProgressBarModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...mateiaModule],
  exports: [...mateiaModule],
})
export class MaterialModule {}
