import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  reviewModal(review) {
    this.modalService.open(review, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  addreviewModal(addreview) {
    this.modalService.open(addreview, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  reviewDeleteModal(reviewDelete) {
    this.modalService.open(reviewDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
}
