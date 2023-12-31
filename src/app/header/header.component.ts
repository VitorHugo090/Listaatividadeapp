import { MatSidenav } from '@angular/material/sidenav';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() sideNavBar!: MatSidenav;
  public openSideNav(){

    this.sideNavBar.toggle();
  }

}
