import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    // params metodo 1 o sin inputbinding
    // provideRouter(routes),

    // params metodo 2
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
  ],
};
