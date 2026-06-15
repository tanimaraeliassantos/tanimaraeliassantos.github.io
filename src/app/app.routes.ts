import { Routes } from '@angular/router';
import { ArticleComponent } from './article-component/article-component';
import { HomeComponent } from './home-component/home-component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog/:id', component: ArticleComponent },
];
