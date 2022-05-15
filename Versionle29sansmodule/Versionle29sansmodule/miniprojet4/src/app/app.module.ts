import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConsultationComponent } from './consultation/consultation.component';

import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { NgxQRCodeModule } from 'ngx-qrcode2';


import { ForumListComponent } from './forum-list/forum-list.component';
import { CreateForumComponent } from './create-forum/create-forum.component';
import { ForumService } from './forum.service';
import { UpdateForumComponent } from './update-forum/update-forum.component';
import { SujetsListComponent } from './sujets-list/sujets-list.component';
import { UpdateSujetComponent } from './update-sujet/update-sujet.component';
import { CreateSujetComponent } from './create-sujet/create-sujet.component';
import { ReponseListComponent } from './reponse-list/reponse-list.component';
import { NgToastModule } from 'ng-angular-popup';
import { CreateReponseComponent } from './create-reponse/create-reponse.component';
import { ListForumFComponent } from './list-forum-f/list-forum-f.component';
import { ListSujetFComponent } from './list-sujet-f/list-sujet-f.component';
import { ListReponseFComponent } from './list-reponse-f/list-reponse-f.component';
import { CreateSujetFComponent } from './create-sujet-f/create-sujet-f.component';
import { CreateReponseFComponent } from './create-reponse-f/create-reponse-f.component'
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { NgxPaginationModule } from 'ngx-pagination';
import { PublicationListComponent } from './publication-list/publication-list.component';
import { CreatePublicationComponent } from './create-publication/create-publication.component';

import { PublicationListFComponent } from './publication-list-f/publication-list-f.component';
import { PostComponent } from './post/post.component';

import {GoogleChartsModule} from "angular-google-charts";
import { StatComponent } from './stat/stat.component';

import {WebcamModule} from 'ngx-webcam';
import { MypubsComponent } from './mypubs/mypubs.component';
import { UpdatePubComponent } from './update-pub/update-pub.component';


import { EnfantComponent } from './enfant/enfant.component';
import { AddEnfantComponent } from './enfant/add-enfant/add-enfant.component';
import { NavbarBackComponent } from './navbar-back/navbar-back.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateEnfantComponent } from './enfant/update-enfant/update-enfant.component';
import { SearchPipe } from './enfant/search.pipe';

import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { WavesModule, TableModule, IconsModule } from 'angular-bootstrap-md';
import {NgPipesModule} from 'ngx-pipes';
import { DetailsEnfantComponent } from './enfant/details-enfant/details-enfant.component';

import { ConsultationsComponent } from './consultations/consultations.component';
import { AddConsultaionComponent } from './consultations/add-consultaion/add-consultaion.component';
import { DetailsConsultaionComponent } from './consultations/details-consultaion/details-consultaion.component';
import { UpdateConsultaionComponent } from './consultations/update-consultaion/update-consultaion.component';
import { RendezVousListComponent } from './rendez-vous-list/rendez-vous-list.component';
import { CreateRendezVousComponent } from './create-rendez-vous/create-rendez-vous.component';
import { UpdateRendezVousComponent } from './update-rendez-vous/update-rendez-vous.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { CreateReclamationComponent } from './create-reclamation/create-reclamation.component';
import { UpdateReclamationComponent } from './update-reclamation/update-reclamation.component';






import { EvenementComponent } from './evenement/evenement.component';
import { AddEvenementComponent } from './evenement/add-evenement/add-evenement.component';

import { UpdateEvenementComponent } from './evenement/update-evenement/update-evenement.component';
import { EvenementDetailsComponent } from './evenement/evenement-details/evenement-details.component';

import { Ng2OrderModule } from 'ng2-order-pipe';

import { JardinComponent } from './jardin/jardin.component';
import { AddJardinComponent } from './jardin/add-jardin/add-jardin.component';
import { UpdateJardinComponent } from './jardin/update-jardin/update-jardin.component';
import { JardinDetailsComponent } from './jardin/jardin-details/jardin-details.component';


import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MyenfComponent } from './myenf/myenf.component';
import { MyRecComponent } from './my-rec/my-rec.component';
import { MyEvenComponent } from './my-even/my-even.component';
@NgModule({
  declarations: [


    AppComponent,
    NavbarComponent,
    SidemenuComponent,
    FooterComponent,
    ConsultationComponent,
    ForumListComponent,
    CreateForumComponent,
    UpdateForumComponent,
    SujetsListComponent,
    UpdateSujetComponent,
    CreateSujetComponent,
    ReponseListComponent,
    CreateReponseComponent,
    ListForumFComponent,
    ListSujetFComponent,
    ListReponseFComponent,
    CreateSujetFComponent,
    CreateReponseFComponent,
    PublicationListComponent,
    CreatePublicationComponent,
    PublicationListFComponent,
    PostComponent,
    StatComponent,
    MypubsComponent,
    UpdatePubComponent,
    EnfantComponent,
    AddEnfantComponent,
    NavbarBackComponent,
    UpdateEnfantComponent,
    SearchPipe,
    DetailsEnfantComponent,
    ConsultationsComponent,
    AddConsultaionComponent,
    DetailsConsultaionComponent,
    UpdateConsultaionComponent,
    RendezVousListComponent,
    CreateRendezVousComponent,
    UpdateRendezVousComponent,
    ReclamationListComponent,
    CreateReclamationComponent,
    UpdateReclamationComponent,
    EvenementComponent,
    AddEvenementComponent,
    NavbarBackComponent,
    UpdateEvenementComponent,
    EvenementDetailsComponent,
    JardinComponent,
    AddJardinComponent,
    UpdateJardinComponent,
    JardinDetailsComponent,
    MyenfComponent,
    MyRecComponent,
    MyEvenComponent

    /*CategorieProduitComponent,
    ProduitComponent,
    FormProduitComponent,
    FormCategorieproduitComponent,
    FormReclamationComponent,
    FormReponsereclamationComponent,
    StatReclamationComponent,
    ReclamationComponent,
    ReponseReclamationComponent,*/
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    GoogleChartsModule,
    NgbModule,
    SocialLoginModule,
    NgToastModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxQRCodeModule,
    WebcamModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    GoogleChartsModule,
    NgbModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MatSortModule,
    MatPaginatorModule,
    WavesModule, TableModule, IconsModule,
    NgPipesModule,
    NgToastModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    GoogleChartsModule,
    NgbModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    PdfViewerModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    GoogleChartsModule,
    NgbModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgPipesModule,
    Ng2OrderModule,
    NgxPaginationModule


  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('150572716395-ji0e8rnqu0oc02ichrjgl8b6j4i6p743.apps.googleusercontent.com'),
          },
        ],
      } as SocialAuthServiceConfig,
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
