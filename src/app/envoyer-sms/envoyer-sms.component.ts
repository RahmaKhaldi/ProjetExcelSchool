import { Component, OnInit } from '@angular/core';
import { NbCardModule } from '@nebular/theme'
import { Expediteur } from '../board-user/Expediteur';
import { SMSTable } from '../excel-sms/SMSTable';
import { ExpediteurService } from '../_services/expediteur.service';
@Component({
  selector: 'app-envoyer-sms',
  templateUrl: './envoyer-sms.component.html',
  styleUrls: ['./envoyer-sms.component.css']
})
export class EnvoyerSMSComponent implements OnInit {
  expediteur:Expediteur[]=[]
  smsModal=new SMSTable()
  exped:any
  showSuccess=false
  constructor(private expediteurService:ExpediteurService) { }

  ngOnInit(): void {
    this.expediteurService.getAllExpediteur(3).subscribe(
      data => {
        this.expediteur = data;
        this.showSuccess=true

      },
      err => {
        this.expediteur = JSON.parse(err.error).message;
      });
  }

}
