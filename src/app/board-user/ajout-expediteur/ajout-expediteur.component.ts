import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ajout-expediteur',
  templateUrl: './ajout-expediteur.component.html',
  styleUrls: ['./ajout-expediteur.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class AjoutExpediteurComponent  {
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }
}