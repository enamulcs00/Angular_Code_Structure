import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ROUTES } from './menu-items ';
import { RouteInfo } from './vertical.metadata';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-header-vertical',
  templateUrl: './header-vertical.component.html',
  styleUrls: ['./header-vertical.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
}
})
export class HeaderVerticalComponent implements OnInit {
  @ViewChild('autoCom') autoCom: ElementRef;

  showMenu = '';
  showSubMenu = '';
  public topbarnavItems: any[];
  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
  }

  onClick(event) {
    if (!this.autoCom.nativeElement.contains(event.target)) {
      this.showMenu = '0';
      console.log("CLicked Outside");
    }  // or some similar check
        else {
          console.log("Licked Inskded");
        }
}

  constructor(private modalService: NgbModal, private router: Router, private route: ActivatedRoute) {}
  // End open close
  ngOnInit() {
    this.topbarnavItems = ROUTES.filter(topbarnavItem => topbarnavItem);

      // $(document).click(function (event) {
      //     var clickover = $(event.target);
      //     var _opened = $(".collapse").hasClass("in");
      //     if (_opened === true && !clickover.hasClass("in")) {
      //         $("#topbarnav li").click();
      //     }
      // });

   
  }

}
