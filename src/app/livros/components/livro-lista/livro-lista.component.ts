import { Component, OnDestroy, OnInit } from "@angular/core";
import { LivroService } from "../../services/livro.service";
import { Subscription } from "rxjs";
import { Livro } from "../../types/livro.class";
import { AlertService } from '@services';
import { AlertController, ViewWillEnter } from "@ionic/angular";

@Component({
    templateUrl: './livro-lista.component.html',
    styleUrls: ['./livro-lista.component.scss']
})
export class LivroListaComponent implements OnInit, OnDestroy, ViewWillEnter {

    public livros: Livro[] = [];
    private subscription!: Subscription;

    constructor(
        private livroService: LivroService,
        private alertService: AlertService,
        private alertController: AlertController,
    ) { }
    
    ionViewWillEnter(): void {
        this.listagem();
    }

    ngOnInit(): void {
                
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    listagem() {
        this.subscription = this.livroService
            .getLivros()
            .subscribe(
                (response) => {
                    console.log('Response: ', response);
                    this.livros = response;
                },
                (error) => {
                    console.error(error);
                    this.alertService.error('Erro ao carregar listagem de livros');
                }
            );
    }

    excluir(livro: Livro) {
        this.alertController
            .create({
                header: 'Confirmação de exclusão',
                message: `Deseja excluir o livro ${livro.titulo}?`,
                buttons: [
                    {
                        text: 'Sim',
                        handler: () => {
                            this.livroService
                                .remove(livro)
                                .subscribe({
                                    next: () => {
                                        this.livros = this.livros.filter(
                                            l => l.id !== livro.id
                                        )
                                    },
                                    error: (error) => {
                                        console.error(error);
                                        this.alertService.error('Não foi possível excluir o livro!');
                                    }
                                });;
                        },
                    },
                    {
                        text: 'Não',
                    },
                ],
            })
            .then((alerta) => alerta.present());
    }

}