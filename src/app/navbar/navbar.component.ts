import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  public theme: any;

  changeTheme() {
    if (this.theme) {
      localStorage.removeItem('theme');
      this.theme = null;
      this.renderer.removeClass(document.body, 'dark-theme');
    } else {
      localStorage.setItem('theme', 'dark');
      this.theme = 'dark';
      this.renderer.addClass(document.body, 'dark-theme');
    }
  }

  ngOnInit(): void {
    this.theme = localStorage.getItem('theme');
    if (this.theme) this.renderer.addClass(document.body, 'dark-theme');
  }
}
