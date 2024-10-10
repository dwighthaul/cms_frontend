import { Component } from '@angular/core';
import { DynamicContent, DynamicContentService } from 'src/app/shared/service/backend/dynamic-content.service';



@Component({
  selector: 'app-dynamic-content-page',
  templateUrl: './dynamic-content-page.component.html',
  styleUrls: ['./dynamic-content-page.component.css']
})
export class DynamicContentPageComponent {
  dynamicContent: DynamicContent[] = [];
  selectedContent: DynamicContent | null = null;
  isEditing: boolean = false;

  constructor(private dynamicContentService: DynamicContentService) { }



  ngOnInit() {
    this.getDynamicContent()
  }

  getDynamicContent() {
    this.dynamicContentService.getDynamicContent().subscribe(dynamicContent => {
      this.dynamicContent = dynamicContent;
    });

  }

  // Add or Update content
  saveContent(content: DynamicContent) {
    console.log("updateDynamicContent")
    this.dynamicContentService.updateDynamicContent(content.id, content).subscribe(() => {
      this.getDynamicContent();
    });;
    this.selectedContent = null;
  }

  // Edit content
  editContent(content: DynamicContent) {
    this.selectedContent = { ...content };
  }

  // Cancel editing
  cancel() {
    this.isEditing = false;
    this.selectedContent = null;
  }

}
