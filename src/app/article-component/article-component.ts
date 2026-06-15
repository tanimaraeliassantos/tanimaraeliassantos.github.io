import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-article-component',
  imports: [RouterLink, TranslateModule],
  templateUrl: './article-component.html',
  styleUrl: './article-component.css',
})
export class ArticleComponent implements OnInit {
  articleKey: string = '';
  articleId: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      console.log('ID detectado:', id);
      if (id) {
        this.articleKey = id.toUpperCase().replace('-', '_');
        console.log('Clave generada:', this.articleKey);
      }
    });
  }

  loadArticleContent(id: string | null) {
    console.log('Cargando contenido para:', id);
  }
}
