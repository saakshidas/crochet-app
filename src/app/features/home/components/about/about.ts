import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  points = [
    'Premium quality yarns and materials',
    'Each piece uniquely handcrafted',
    'Custom orders welcome',
    'Support local craftsmanship'
  ];
}
