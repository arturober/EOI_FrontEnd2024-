import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SetColorDirective } from './directives/set-color.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [SetColorDirective, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-directives';
  color = 'yellow';
}
