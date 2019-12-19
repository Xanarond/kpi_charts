import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  open = false;
  drawerType = 'temporary';
  headerType = 'spacer';

  toggleDrawer() {
    this.open = !this.open;
  }

  get toolbarSpacer() {
    return this.headerType === 'spacer';
  }

  get toolbarHeader() {
    return this.headerType === 'header';
  }
}
