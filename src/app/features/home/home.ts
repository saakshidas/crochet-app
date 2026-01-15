import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero';
import { CategoriesComponent } from './components/categories/categories';
import { FeaturedProductsComponent } from './components/featured-products/featured-products';
import { AboutComponent } from './components/about/about';
import { CtaComponent } from './components/cta/cta';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    CategoriesComponent,
    FeaturedProductsComponent,

  ],
  template: `
    <main class="bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]">
      <app-hero></app-hero>
      <app-categories></app-categories>
      <app-featured-products></app-featured-products>

    </main>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class Home { }
