import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Pessoa } from "src/app/models/pessoa";
import { PessoaService } from "src/app/services/pessoa.service";

@Component({
    selector: "app-cadastrar-pessoa",
    templateUrl: "./cadastrar-pessoa.component.html",
    styleUrls: ["./cadastrar-pessoa.component.css"],
})
export class CadastrarPessoaComponent implements OnInit {
    nome!: string;
    email!: string;
    naturalidade!: string;
    idade!: number;


    constructor(private service: PessoaService, private router: Router) {}

    ngOnInit(): void {}

    

    cadastrar(): void {
        let pessoa: Pessoa = {
            nome: this.nome,
            email: this.email,
            naturalidade: this.naturalidade,
            idade: this.idade,
        };
        this.service.create(pessoa).subscribe((pessoa) => {
            console.log(pessoa);
            this.router.navigate(["pessoa/listar"]);
        });
    }
}
