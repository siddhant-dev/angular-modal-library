  import { Component, ElementRef, OnInit } from '@angular/core';
  import { ModalService } from 'modal';


  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    title = 'modal-test';

      private el: any;

      constructor(private modalService: ModalService, ) { }

    openModal(id: string) {
      this.modalService.open(id);
  }

    closeModal(id: string) {
      this.modalService.close(id);
    }

    ngOnInit() {
      this.el = document.querySelector('.modal');
      this.el.style.top = '200px';
    }
  }
