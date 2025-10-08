import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: any[] = [];
  name = '';
  role = '';

  constructor(private http: HttpClient) {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<any[]>(`${environment.API_URL}/users`).subscribe(data => this.users = data);
  }

  addUser() {
    if(this.name && this.role) {
      this.http.post(`${environment.API_URL}/users`, { name: this.name, role: this.role })
        .subscribe(() => {
          this.fetchUsers();
          this.name = '';
          this.role = '';
        });
    }
  }
}

