import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'franks-4d72a',
        appId: '1:1005180793897:web:1c4bdb93eb38fee0e41838',
        storageBucket: 'franks-4d72a.appspot.com',
        apiKey: 'AIzaSyB26uovSor8dvDk9G7bcKA5kv0jSP1wu9U',
        authDomain: 'franks-4d72a.firebaseapp.com',
        messagingSenderId: '1005180793897',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};
