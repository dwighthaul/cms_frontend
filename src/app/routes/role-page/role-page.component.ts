import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleService } from 'src/app/shared/service/backend/role.service';
import { Role } from 'src/app/shared/service/backend/user.service';

@Component({
  selector: 'app-role-page',
  templateUrl: './role-page.component.html',
  styleUrls: ['./role-page.component.css']
})
export class RolePageComponent {
  roles: Role[] = [];
  roleForm: FormGroup;
  isEditMode = false;
  currentRoleId?: number;

  constructor(
    private roleService: RoleService,
    private fb: FormBuilder
  ) {
    // Initialize the form
    this.roleForm = this.fb.group({
      rolename: ['', Validators.required],
      permissions: ['', Validators.required],  // Comma-separated permissions
    });
  }

  ngOnInit(): void {
    this.fetchRoles();
  }

  // Fetch roles from API
  fetchRoles(): void {
    this.roleService.getRoles().subscribe((data: Role[]) => {
      this.roles = data;
    });
  }

  // Submit form to create or update a role
  onSubmit(): void {
    if (this.roleForm.invalid) return;

    const roleData: Role = {
      rolename: this.roleForm.value.rolename,
      permissions: this.roleForm.value.permissions,
    };

    if (this.isEditMode && this.currentRoleId) {
      // Update the role
      this.roleService.updateRole(this.currentRoleId, roleData).subscribe(() => {
        this.resetForm();
        this.fetchRoles();
      });
    } else {
      // Create a new role
      this.roleService.createRole(roleData).subscribe(() => {
        this.resetForm();
        this.fetchRoles();
      });
    }
  }

  // Edit an existing role
  editRole(role: Role): void {
    this.isEditMode = true;
    this.currentRoleId = role.id;
    this.roleForm.patchValue({
      rolename: role.rolename,
      permissions: role.permissions
    });
  }

  // Delete a role
  deleteRole(id: number): void {
    this.roleService.deleteRole(id).subscribe(() => {
      this.fetchRoles();
    });
  }

  // Reset form
  resetForm(): void {
    this.isEditMode = false;
    this.currentRoleId = undefined;
    this.roleForm.reset();
  }
}
