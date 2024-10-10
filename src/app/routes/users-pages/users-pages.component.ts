import { Component } from '@angular/core';
import { RoleService } from 'src/app/shared/service/backend/role.service';
import { Role, User, UserService } from 'src/app/shared/service/backend/user.service';

@Component({
  selector: 'app-users-pages',
  templateUrl: './users-pages.component.html',
  styleUrls: ['./users-pages.component.css']
})
export class UsersPagesComponent {


  users: User[] = [];
  roles: Role[] = [];
  selectedUser: User | null = null;
  isEditing: boolean = false;

  constructor(private userService: UserService, private roleService: RoleService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getRoles();
  }

  getRoles(): void {
    this.roleService.getRoles().subscribe(roles => {
      console.log("getRoles" + roles.length)
      this.roles = roles;
    });

  }

  // Get all users
  getUsers(): void {
    this.userService.getUsers().subscribe(users => {
      console.log("getUsers" + users.length)
      this.users = users;
    });
  }

  // Select a user to edit
  editUser(user: User): void {
    this.selectedUser = { ...user };
    this.isEditing = true;
  }

  // Create a new user
  createUser(): void {
    this.selectedUser = {
      id: 0,
      username: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      Role: {
        id: -1,
        rolename: '',
        permissions: '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    };
    this.isEditing = true;
  }

  onRoleChange() {
    if (this.selectedUser?.Role) {
      console.log('User Role Changed:', this.selectedUser.Role);
      var selectedRole = this.roles.find(x => { console.log(x, this.selectedUser?.Role.id); return (x.id == this.selectedUser?.Role.id) });

      if (selectedRole) {
        this.selectedUser.Role = selectedRole
      }

    } else {
      console.log('No role selected');
    }
  }


  // Save user (create or update)
  saveUser(): void {
    if (this.selectedUser) {
      if (this.selectedUser.id === 0) {
        this.userService.createUser(this.selectedUser).subscribe(() => {
          this.getUsers();
          this.selectedUser = null;
          this.isEditing = false;
        });
      } else {
        this.userService.updateUser(this.selectedUser.id, this.selectedUser).subscribe(() => {
          this.getUsers();
          this.selectedUser = null;
          this.isEditing = false;
        });
      }
    }
  }

  // Delete a user
  deleteUser(user: User): void {
    //if (confirm(`Are you sure you want to delete user ${user.username}?`)) {
    this.userService.deleteUser(user.id).subscribe(() => {
      this.getUsers();
    });
    //}
  }

  // Cancel editing
  cancel(): void {
    this.selectedUser = null;
    this.isEditing = false;
  }
}

