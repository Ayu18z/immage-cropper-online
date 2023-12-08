import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';

const firebaseConfig = {
  projectId: 'aydash',
  appId: '1:115151755324:web:8d58ce8bcf33e560e7cb39',
  storageBucket: 'aydash.appspot.com',
  apiKey: 'AIzaSyCPNuPpgHvFv073PJcy5gwV07pQ3X5gNec',
  authDomain: 'aydash-c0eee.firebaseapp.com',
  messagingSenderId: '115151755324',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideStorage(() => getStorage()),
    ]),
  ],
};
