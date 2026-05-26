import { ApplicationConfig, importProvidersFrom, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

// 🛠️ TU PROPIO LOADER ULTRA-COMPATIBLE:
// Esto sustituye a TranslateHttpLoader y evita el error del InjectionToken para siempre.
export class CustomTranslateLoader implements TranslateLoader {
  private http = inject(HttpClient); // Inyectamos el cliente HTTP de forma nativa de Angular

  getTranslation(lang: string): Observable<any> {
    // Busca tus archivos JSON en la carpeta que creamos de forma directa y limpia
    return this.http.get(`./i18n/${lang}.json`);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),

    // Configuramos el módulo pasándole tu cargador personalizado
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: CustomTranslateLoader, // <--- Usamos tu clase personalizada
        },
      }),
    ),
  ],
};
