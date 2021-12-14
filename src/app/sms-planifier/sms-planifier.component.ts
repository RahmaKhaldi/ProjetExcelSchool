import { Component, OnInit } from '@angular/core';
import { Expediteur } from '../board-user/Expediteur';
import { SMSTable } from '../excel-sms/SMSTable';
import { EnvoyerSMSService } from '../_services/envoyer-sms.service';
import { ExpediteurService } from '../_services/expediteur.service';

@Component({
  selector: 'app-sms-planifier',
  templateUrl: './sms-planifier.component.html',
  styleUrls: ['./sms-planifier.component.css']
})
export class SmsPlanifierComponent implements OnInit {
  smsModal=new SMSTable()
expediteur:Expediteur[]=[]
showSuccess=false
exped:Expediteur
selectedFile:File
  constructor(private smsService: EnvoyerSMSService,private expediteurService:ExpediteurService) { }

  ngOnInit(): void {
    this.expediteurService.getAllExpediteur(3).subscribe(
      data => {
        this.expediteur = data;
      },
      err => {
        this.expediteur = JSON.parse(err.error).message;
      });
  }
addSMS(id:number){
  const uploadImageData = new FormData();
    
    const user=this.smsModal;
    console.log('kkkkkk',user)
    
    
      uploadImageData.append('imageFile',this.selectedFile );
    
    uploadImageData.append('user',JSON.stringify(user));
    console.log(uploadImageData);
    console.log('kkkkkk',uploadImageData);
  this.smsService.addSMSTable(uploadImageData,id).subscribe(
    data => {
      this.smsModal = data;
      this.showSuccess=true
    },
    err => {
      this.smsModal = JSON.parse(err.error).message;
    });
}
public onFileChanged(event) {
  //Select File
  this.selectedFile = event.target.files[0];
  
}

}
