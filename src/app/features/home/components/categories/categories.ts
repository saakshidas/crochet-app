import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  templateUrl: './categories.html',
  styleUrl: './categories.scss'
})
export class CategoriesComponent {
  categories = [
    { name: 'Amigurumi', icon: '🧸' },
    { name: 'Wearables', icon: '🧣' },
    { name: 'Home Decor', icon: '🏠' },
    { name: 'Accessories', icon: '👜' },
    { name: 'Baby Items', icon: '👶' },
    { name: 'Custom Gifts', icon: '🎁' }
  ];
}
