import { NgModule } from "@angular/core";
import { FiltroPipe } from "./filtro.pipe";

// every pipe has to be in declarations and export
@NgModule({
  declarations: [FiltroPipe],
  exports: [FiltroPipe]
})
export class PipesModule {}
