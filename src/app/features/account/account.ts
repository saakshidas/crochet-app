import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.html',
  styleUrl: './account.scss',
})
export class Account {
  user = {
    name: 'Saakshi Das',
    email: 'saakshidas.atwork@gmail.com',
    phone: '9902458487',
    avatar: 'S'
  };

  orders = [
    { id: '#BK-1024', date: 'Oct 12, 2025', status: 'Delivered', total: 1850.00, items: ['Adventure Marker Tote'] },
    { id: '#BK-1025', date: 'Oct 15, 2025', status: 'Processing', total: 3499.00, items: ['Cozy Throw Blanket'] },
    { id: '#BK-1026', date: 'Oct 20, 2025', status: 'Shipped', total: 850.00, items: ['Baby Bunny Booty'] }
  ];

  menuItems = [
    { label: 'My Orders', icon: '📦', active: true },
    { label: 'Address Book', icon: '🏠', active: false },
    { label: 'Wishlist', icon: '❤️', active: false },
    { label: 'Settings', icon: '⚙️', active: false }
  ];
}
