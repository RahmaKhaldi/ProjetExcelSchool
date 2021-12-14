import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AjoutExpediteurComponent } from './board-user/ajout-expediteur/ajout-expediteur.component';
import { EnvoyerSMSComponent } from './envoyer-sms/envoyer-sms.component';
import { ExcelSMSComponent } from './excel-sms/excel-sms.component';
import { SmsPlanifierComponent } from './sms-planifier/sms-planifier.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
 

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  {path: 'smsEnvoyer', component: EnvoyerSMSComponent},
  {path: 'smsExcel', component: ExcelSMSComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'smsP', component: SmsPlanifierComponent},
  { path: 'ajoutE', component: AjoutExpediteurComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

const config: ExtraOptions = {
  useHash: true,
};


@NgModule({
  imports: [RouterModule.forRoot(routes,config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
