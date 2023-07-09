import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedComponent: string = 'welcome';

  selectComponent(componentName: string): void {
    this.selectedComponent = componentName;
  }
}



@Component({
  selector: 'app-customer-management',
  template: `
    <div class="container">
      <div class="logo">
        <img src="path_to_your_logo.png" alt="Logo">
      </div>
      <h1 class="name">Customer Management</h1>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      align-items: center;
    }

    .logo {
      margin-right: 10px;
    }

    .name {
      font-size: 24px;
      font-weight: bold;
    }
  `]
})
export class CustomerManagementComponent { }
