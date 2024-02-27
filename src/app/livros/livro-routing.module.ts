import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LivroListaComponent } from "./components/livro-lista/livro-lista.component";

const routes: Routes = [
    {
        path: '',
        component: LivroListaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LivroRoutingModule { }