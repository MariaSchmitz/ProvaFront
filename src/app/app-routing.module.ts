import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastrarPessoaComponent } from "./components/views/pessoa/cadastrar-pessoa/cadastrar-pessoa.component";
import { ListarPessoaComponent } from "./components/views/pessoa/listar-pessoa/listar-pessoa.component";

const routes: Routes = [
    {
        path: "",
        component: ListarPessoaComponent,
    },
    {
        path: "pessoa/listar",
        component: ListarPessoaComponent,
    },
    {
        path: "pessoa/cadastrar",
        component: CadastrarPessoaComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
