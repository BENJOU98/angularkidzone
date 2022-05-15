import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConsultaionComponent } from './consultations/add-consultaion/add-consultaion.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { DetailsConsultaionComponent } from './consultations/details-consultaion/details-consultaion.component';
import { UpdateConsultaionComponent } from './consultations/update-consultaion/update-consultaion.component';
import { CreateForumComponent } from './create-forum/create-forum.component';
import { CreatePublicationComponent } from './create-publication/create-publication.component';
import { CreateReclamationComponent } from './create-reclamation/create-reclamation.component';
import { CreateRendezVousComponent } from './create-rendez-vous/create-rendez-vous.component';
import { CreateReponseFComponent } from './create-reponse-f/create-reponse-f.component';
import { CreateReponseComponent } from './create-reponse/create-reponse.component';
import { CreateSujetFComponent } from './create-sujet-f/create-sujet-f.component';
import { CreateSujetComponent } from './create-sujet/create-sujet.component';
import { AddEnfantComponent } from './enfant/add-enfant/add-enfant.component';
import { DetailsEnfantComponent } from './enfant/details-enfant/details-enfant.component';
import { EnfantComponent } from './enfant/enfant.component';
import { UpdateEnfantComponent } from './enfant/update-enfant/update-enfant.component';
import { AddEvenementComponent } from './evenement/add-evenement/add-evenement.component';
import { EvenementDetailsComponent } from './evenement/evenement-details/evenement-details.component';
import { EvenementComponent } from './evenement/evenement.component';
import { UpdateEvenementComponent } from './evenement/update-evenement/update-evenement.component';
import { ForumListComponent } from './forum-list/forum-list.component';
import { ForumService } from './forum.service';
import { AddJardinComponent } from './jardin/add-jardin/add-jardin.component';
import { JardinDetailsComponent } from './jardin/jardin-details/jardin-details.component';
import { JardinComponent } from './jardin/jardin.component';
import { UpdateJardinComponent } from './jardin/update-jardin/update-jardin.component';
import { ListForumFComponent } from './list-forum-f/list-forum-f.component';
import { ListReponseFComponent } from './list-reponse-f/list-reponse-f.component';
import { ListSujetFComponent } from './list-sujet-f/list-sujet-f.component';
import { MyEvenComponent } from './my-even/my-even.component';
import { MyRecComponent } from './my-rec/my-rec.component';
import { MyenfComponent } from './myenf/myenf.component';
import { MypubsComponent } from './mypubs/mypubs.component';
import { PostComponent } from './post/post.component';
import { PublicationListFComponent } from './publication-list-f/publication-list-f.component';
import { PublicationListComponent } from './publication-list/publication-list.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { RendezVousListComponent } from './rendez-vous-list/rendez-vous-list.component';
import { ReponseListComponent } from './reponse-list/reponse-list.component';
import { StatComponent } from './stat/stat.component';
import { SujetsListComponent } from './sujets-list/sujets-list.component';
import { UpdateForumComponent } from './update-forum/update-forum.component';
import { UpdatePubComponent } from './update-pub/update-pub.component';
import { UpdateReclamationComponent } from './update-reclamation/update-reclamation.component';
import { UpdateRendezVousComponent } from './update-rendez-vous/update-rendez-vous.component';


const routes: Routes = [



  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'consultation', loadChildren: () => import('./consultation/consultation.module').then(m => m.ConsultationModule) },
  {path: 'forums', component: ForumListComponent},
  {path: 'stat', component: StatComponent},
  {path: 'pubs', component: PublicationListComponent},
  {path: 'pubsF', component: PublicationListFComponent},
  {path: 'mypubs', component: MypubsComponent},
  {path: 'myenf', component: MyenfComponent},
  {path: 'myRec', component: MyRecComponent},
  {path: 'myeven', component: MyEvenComponent},
  {path: 'forumsF', component: ListForumFComponent},
  {path: 'sujets/:id', component: SujetsListComponent},
  {path: 'sujetsF/:id', component: ListSujetFComponent},
  {path: 'reponsesF/:id', component: ListReponseFComponent},
  {path: 'create-Forum',component:CreateForumComponent},
  {path: 'create-Pub',component:CreatePublicationComponent},
  {path: 'create-sujet/:id',component:CreateSujetComponent},
  {path: 'create-sujet-f/:id',component:CreateSujetFComponent},
  {path: 'create-reponse-f/:id',component:CreateReponseFComponent},
  {path: 'create-reponse/:id',component:CreateReponseComponent},
  {path: '', redirectTo: 'forumsF', pathMatch: 'full'},

  {path: 'update-forum/:id', component: UpdateForumComponent},
  {path: 'update-pub/:id', component: UpdatePubComponent},
  {path: 'seepost/:id', component: PostComponent},
  {path: 'update-sujet/:id', component: SujetsListComponent},

  {path: 'reponses/:id', component: ReponseListComponent},

  {path: 'enfants',component: EnfantComponent},
  {path: 'AddEnfant',component: AddEnfantComponent},

  {path: 'update-enfant/:id',component: UpdateEnfantComponent},
  {path: 'enfant-detail/:id',component: DetailsEnfantComponent},
  {path: 'consultations',component: ConsultationsComponent},
  {path: 'update-cons/:id',component: UpdateConsultaionComponent},
  {path: 'cons-detail/:id',component: DetailsConsultaionComponent},
  {path: 'AddCons',component: AddConsultaionComponent},

  {path: 'rendez-vous', component: RendezVousListComponent },

  { path: 'create-Meeting', component: CreateRendezVousComponent },
  { path: 'update-meeting/:id', component: UpdateRendezVousComponent },
  {path: 'reclamation', component: ReclamationListComponent },
  {path: '', redirectTo: 'reclamation', pathMatch: 'full'},
  { path: 'create-eclamation', component: CreateReclamationComponent },
  { path: 'update-reclamation/:id', component: UpdateReclamationComponent },

  {path: 'Addevenements', component : AddEvenementComponent},
  { path: 'evenements', component: EvenementComponent  },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'consultation', loadChildren: () => import('./consultation/consultation.module').then(m => m.ConsultationModule) },
  { path: 'update-evenement/:id', component: UpdateEvenementComponent},
  { path: 'evenement-details/:id', component: EvenementDetailsComponent},
  { path: 'jardin', component: JardinComponent},
  { path: 'Addjardins', component : AddJardinComponent},
  { path: 'update-Jardin/:id', component: UpdateJardinComponent},
  { path: 'jardin-details/:id', component: JardinDetailsComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
