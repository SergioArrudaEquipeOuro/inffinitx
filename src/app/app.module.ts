import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbrirContaComponent } from './components/abrir-conta/abrir-conta.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';
import { EnviarEmailComponent } from './components/enviar-email/enviar-email.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderPlanosComponent } from './components/header-planos/header-planos.component';
import { LoginComponent } from './components/login/login.component';
import { MapComponent } from './components/map/map.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { OpinioesComponent } from './components/opinioes/opinioes.component';
import { PagamentoBoletosComponent } from './components/pagamento-boletos/pagamento-boletos.component';
import { PagamentoPixComponent } from './components/pagamento-pix/pagamento-pix.component';
import { PagamentoTedComponent } from './components/pagamento-ted/pagamento-ted.component';
import { PagamentoWalletComponent } from './components/pagamento-wallet/pagamento-wallet.component';
import { PerguntasFrequentesComponent } from './components/perguntas-frequentes/perguntas-frequentes.component';
import { PlanosComponent } from './components/planos/planos.component';
import { VideoGalleryComponent } from './components/video-gallery/video-gallery.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ContasComponent } from './pages/contas/contas.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { HomeComponent } from './pages/home/home.component';
import { InvestirComponent } from './pages/investir/investir.component';
import { LoginUserComponent } from './pages/login-user/login-user.component';
import { NossosTermosComponent } from './pages/nossos-termos/nossos-termos.component';
import { PlanoBasicComponent } from './pages/plano-basic/plano-basic.component';
import { PlanoStartComponent } from './pages/plano-start/plano-start.component';
import { PlanoPremiumComponent } from './pages/plano-premium/plano-premium.component';
import { PlanoPlatinumComponent } from './pages/plano-platinum/plano-platinum.component';
import { PlataformaComponent } from './pages/plataforma/plataforma.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { SuporteComponent } from './pages/suporte/suporte.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';




const routes: Routes = [
  
  { path: 'abrirconta', component: AbrirContaComponent },//Teste de component
  { path: 'carrossel', component: CarrosselComponent },//Teste de component
  { path: 'enviaremail', component: EnviarEmailComponent },//Teste de component
  { path: 'footer', component: FooterComponent },//Teste de component
  { path: 'header', component: HeaderComponent },//Teste de component
  { path: 'loginn', component: LoginComponent },//Teste de component
  { path: 'map', component: MapComponent },//Teste de component
  { path: 'navbar', component: NavBarComponent },//Teste de component
  { path: 'opinioes', component: OpinioesComponent },//Teste de component
  { path: 'faq', component: PerguntasFrequentesComponent },//Teste de component
  { path: 'planos', component: PlanosComponent },//Teste de component
  { path: 'videos', component: VideoGalleryComponent },//Teste de component
  { path: 'pix', component: PagamentoPixComponent },//Teste de component
  { path: 'ted', component: PagamentoTedComponent },//Teste de component
  { path: 'wallet', component: PagamentoWalletComponent },//Teste de component
  
  { path: 'header2', component: HeaderPlanosComponent },//Teste de component


  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'contas', component: ContasComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'investir', component: InvestirComponent },
  { path: 'login', component: LoginUserComponent },
  { path: 'plataforma', component: PlataformaComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'suporte', component: SuporteComponent },
  { path: 'plano-basic', component: PlanoBasicComponent },
  { path: 'plano-start', component: PlanoStartComponent },
  { path: 'plano-premium', component: PlanoPremiumComponent },
  { path: 'plano-platinum', component: PlanoPlatinumComponent },
  { path: 'nossos-termos', component: NossosTermosComponent },
  



]


@NgModule({
  declarations: [
    AppComponent,
    AbrirContaComponent,
    CarrosselComponent,
    EnviarEmailComponent,
    FooterComponent,
    HeaderComponent,
    HeaderPlanosComponent,
    LoginComponent,
    MapComponent,
    NavBarComponent,
    OpinioesComponent,
    PagamentoBoletosComponent,
    PagamentoPixComponent,
    PagamentoTedComponent,
    PagamentoWalletComponent,
    PerguntasFrequentesComponent,
    PlanosComponent,
    VideoGalleryComponent,
    CadastroComponent,
    ContasComponent,
    CursosComponent,
    HomeComponent,
    InvestirComponent,
    LoginUserComponent,
    NossosTermosComponent,
    PlanoBasicComponent,
    PlanoStartComponent,
    PlanoPremiumComponent,
    PlanoPlatinumComponent,
    PlataformaComponent,
    ProdutosComponent,
    SuporteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
