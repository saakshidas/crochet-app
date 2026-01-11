import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  menuItems = [
    { label: 'Shop', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Community', path: '/community' },
    { label: 'App', path: '/app' }
  ];
}
