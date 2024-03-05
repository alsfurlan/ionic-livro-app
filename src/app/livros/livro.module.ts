import { NgModule } from "@angular/core";
import { LivroRoutingModule } from "./livro-routing.module";
import { IonicModule } from "@ionic/angular";
import { LivroListaComponent } from "./components/livro-lista/livro-lista.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [LivroRoutingModule, CommonModule, IonicModule],
    declarations: [LivroListaComponent]
})
export class LivroModule { }