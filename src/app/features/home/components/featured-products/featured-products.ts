import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../../../../shared/components/product-card/product-card';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './featured-products.html',
  styleUrl: './featured-products.scss'
})
export class FeaturedProductsComponent {
  whatsappNumber = '919902458487';

  products = [
    {
      id: 1,
      name: 'Adventure Marker Tote',
      description: 'A spacious hand-crocheted bag, perfect for farmers markets and beach days.',
      price: 1850.00,
      image: '/images/tote.png',
      badge: 'Featured'
    },
    {
      id: 2,
      name: 'Cozy Throw Blanket',
      description: 'Soft and warm crochet in beautiful boho tones. Perfect for snuggling on the couch.',
      price: 3499.00,
      image: '/images/blanket.png',
      badge: 'Product'
    },
    {
      id: 3,
      name: 'Baby Bunny Booty',
      description: 'Adorable security blanket with a sweet bunny head. Safe for newborns and toddlers.',
      price: 850.00,
      image: '/images/hero.png',
      badge: 'Newborn'
    },
    {
      id: 4,
      name: 'Teddy Bear Friend',
      description: 'Classic cuddly bear companion made with premium acrylic yarn. Safety eyes included.',
      price: 1200.00,
      image: '/images/hero.png',
      badge: 'Toy'
    }
  ];

  orderOnWhatsApp(product: any) {
    const message = `Hello Beauty Knot Crafts! I would like to order: ${product.name} (INR ${product.price})`;
    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
