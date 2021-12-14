import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';

import { APP_BASE_HREF } from '@angular/common';

import { StatnavbarComponent } from './statnavbar/statnavbar.component';
import { AjoutExpediteurComponent } from './board-user/ajout-expediteur/ajout-expediteur.component';
import { EnvoyerSMSComponent } from './envoyer-sms/envoyer-sms.component';
import { NbDialogModule, NbThemeModule, NbWindowModule } from '@nebular/theme';
import { ExcelSMSComponent } from './excel-sms/excel-sms.component';
import { SmsPlanifierComponent } from './sms-planifier/sms-planifier.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    StatnavbarComponent,
    AjoutExpediteurComponent,
    EnvoyerSMSComponent,
    ExcelSMSComponent,
    SmsPlanifierComponent,
    ContactComponent,
    FooterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NbThemeModule,
    HttpClientModule,
    
  ],
  providers: [authInterceptorProviders,{ provide: 'Window',  useValue: window },
  { provide: APP_BASE_HREF, useValue: '/' },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
