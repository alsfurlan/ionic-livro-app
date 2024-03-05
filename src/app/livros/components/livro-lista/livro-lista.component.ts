import { Component, OnDestroy, OnInit } from "@angular/core";
import { LivroService } from "../../services/livro.service";
import { Subscription } from "rxjs";
import { Livro } from "../../types/livro.class";

@Component({
    templateUrl: './livro-lista.component.html',
})
export class LivroListaComponent implements OnInit, OnDestroy {

    public livros: Livro[] = [];
    private subscription!: Subscription;

    constructor(
        private livroService: LivroService
    ) { }

    ngOnInit(): void {
        this.subscription = this.livroService.getLivros().subscribe(
            (response) => {
                console.log('Response: ', response);
                this.livros = response;
            }
        );

    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}