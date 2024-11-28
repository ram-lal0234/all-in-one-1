import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations'; // Required for animations
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(), // Use this for animations
    // If animations are not required, use provideNoopAnimations()
  ],
}).catch(err => console.error(err));
