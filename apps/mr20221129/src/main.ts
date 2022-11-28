import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';
import { ByebyeComponent } from './app/byebye/byebye.component';

const appRoutes: Routes = [
  { path: 'hello', loadComponent: () => import('./app/hello/hello.component') },
  { path: 'bye', component: ByebyeComponent },
];

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule), provideRouter(appRoutes)],
}).catch((err) => console.error(err));
