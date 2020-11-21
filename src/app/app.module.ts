import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { importType } from "@angular/compiler/src/output/output_ast";

import { MaterialModule } from "./material.module";
import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
