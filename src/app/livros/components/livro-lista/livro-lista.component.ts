import { Component, OnDestroy, OnInit } from "@angular/core";
import { LivroService } from "../../services/livro.service";

@Component({
    templateUrl: './livro-lista.component.html',
})
export class LivroListaComponent implements OnInit, OnDestroy {

    constructor(
        private livroService: LivroService
    ) { }

    ngOnInit(): void {
        this.livroService.getLivros().subscribe(
            (response) => {
                console.log('Response: ', response);
            }
        );

    }

    ngOnDestroy(): void {

    }

}