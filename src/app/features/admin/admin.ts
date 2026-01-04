import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin {
  menuItems = ['Shop', 'About', 'Community', 'App'];

  features = [
    {
      title: 'Exclusive Patterns',
      description: 'Access hundreds of unique patterns not found anywhere else, created by top designers.',
      icon: '✨'
    },
    {
      title: 'Easy Tracking',
      description: 'Track your order from our studio to your doorstep in real-time with our integrated map.',
      icon: '🚚'
    },
    {
      title: 'Community Rewards',
      description: 'Earn points for every skein of yarn and pattern you purchase. Redeem for free supplies.',
      icon: '🏷️'
    }
  ];

  products = [
    {
      name: 'Amigurumi Fox Kit',
      type: 'Full Kit',
      price: 24.99,
      image: '/images/fox.png'
    },
    {
      name: 'Merino Wool Blend',
      type: '3 Colors',
      price: 12.00,
      image: '/images/yarn.png'
    },
    {
      name: 'Pro Crochet Hook Set',
      type: 'Sizes 2-6mm',
      price: 18.50,
      image: '/images/hooks.png'
    },
    {
      name: 'Heirloom Blanket PDF',
      type: 'Digital Download',
      price: 5.99,
      image: '/images/hero.png' // Using hero as placeholder for blanket or patterned item
    }
  ];

  testimonials = [
    {
      name: 'Sarah J.',
      role: 'Verified Buyer • 2 days ago',
      text: '"The app is so easy to use. I ordered my yarn and it arrived in 2 days. The color matching feature is a lifesaver!"',
      avatar: '👩',
      rating: 5
    },
    {
      name: 'Michael T.',
      role: 'Verified Buyer • 1 week ago',
      text: '"Love the exclusive patterns. The instructions are crystal clear and the community section is super helpful for tips."',
      avatar: '👨',
      rating: 5
    },
    {
      name: 'Emily R.',
      role: 'Verified Buyer • 3 weeks ago',
      text: '"Great quality products. I just wish there were more color options for the wool, but otherwise perfect experience."',
      avatar: '👩‍🦰',
      rating: 4
    }
  ];
}
