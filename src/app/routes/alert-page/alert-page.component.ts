import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Alert } from 'src/app/shared/service/backend/alert.service';
import { AlertService } from '../../shared/service/backend/alert.service';

@Component({
  selector: 'app-alert-page',
  templateUrl: './alert-page.component.html',
  styleUrls: ['./alert-page.component.css']
})
export class AlertPageComponent implements OnInit {
  items: Alert[] = [];
  selectedItem: Alert | null;

  constructor(private http: HttpClient, private alertService: AlertService) { }

  ngOnInit() {
    this.fetchItems();
  }

  fetchItems() {
    // Example: Replace with your actual backend URL
    this.alertService.getAlerts().subscribe(data => {
      this.items = data;
    });
  }

  viewDetails(item: any) {
    this.selectedItem = item;
  }

  closeDetails() {
    this.selectedItem = null;
  }

  editItem(item: any) {
    // Edit functionality, potentially opening a form or sending a PUT request
    console.log('Edit item:', item);
  }

  deleteItem(item: any) {
    // Delete functionality, making an HTTP DELETE request to the backend
    this.alertService.deleteAlert(item.id).subscribe(() => {
      this.fetchItems(); // Refresh the list after deletion
    });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'OUT_OF_DATE':
        return 'bg-danger'; // red
      case 'AVAILABLE':
        return 'bg-success'; // green
      case 'PENDING':
        return 'bg-warning'; // orange
      default:
        return '';
    }
  }

  getResultClass(result: string): string {
    switch (result) {
      case 'DISPONIBLE':
        return 'bg-success'; // green
      case 'DISPARU':
        return 'bg-danger'; // red
      case 'NON_DISPONIBLE':
        return 'bg-warning'; // orange
      default:
        return '';
    }
  }
}
