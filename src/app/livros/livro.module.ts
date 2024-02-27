import { NgModule } from "@angular/core";
import { LivroRoutingModule } from "./livro-routing.module";
import { IonicModule } from "@ionic/angular";
import { LivroListaComponent } from "./components/livro-lista/livro-lista.component";

@NgModule({
    imports: [LivroRoutingModule, IonicModule],
    declarations: [LivroListaComponent]
})
export class LivroModule { }