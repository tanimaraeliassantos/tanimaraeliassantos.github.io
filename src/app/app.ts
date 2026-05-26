import { Component, signal } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [TranslateModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setFallbackLang('es');
    this.translate.use('es');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
