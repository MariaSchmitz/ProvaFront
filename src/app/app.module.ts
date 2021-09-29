import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CadastrarPessoaComponent } from "./components/views/pessoa/cadastrar-pessoa/cadastrar-pessoa.component";
import { ListarPessoaComponent } from "./components/views/pessoa/listar-pessoa/listar-pessoa.component";

@NgModule({
    declarations: [
        AppComponent,
        ListarPessoaComponent,
        CadastrarPessoaComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
