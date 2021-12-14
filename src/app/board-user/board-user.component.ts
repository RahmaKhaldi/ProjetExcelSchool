import { Component, OnInit } from '@angular/core';
import { ExpediteurService } from '../_services/expediteur.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
import { Expediteur } from './Expediteur';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  content: string;
  expediteur:Expediteur[]=[]

  constructor(private userService: UserService,
    private token: TokenStorageService,private expediteurService:ExpediteurService) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.expediteurService.getAllExpediteur(3).subscribe(
      data => {
        this.expediteur = data;
      },
      err => {
        this.expediteur = JSON.parse(err.error).message;
      });
  }
  

}
