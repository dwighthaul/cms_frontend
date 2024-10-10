import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BlogService } from 'src/app/shared/service/backend/blog.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent {
  blogs: any[] = [];
  currentBlog: any = null;
  form: FormGroup;
  isFormVisible = false

  constructor(
    private blogService: BlogService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      id: [''],
      name: [''],
      content: [''],
      is_actif: [true]
    });
  }

  ngOnInit(): void {
    this.loadBlogs();
  }

  // Load all blogs
  loadBlogs() {
    this.blogService.getBlogs().subscribe((data: any[]) => {
      this.blogs = data;
    });
  }

  // Create or Update an blog
  submitForm() {
    const formData = this.form.value;

    if (formData.id) {
      console.log("Update")
      // Update existing blog
      this.blogService.updateBlog(formData.id, formData).subscribe(() => {
        this.loadBlogs();
        this.resetForm();
        this.isFormVisible = false
      });
    } else {
      // Create new blog
      this.blogService.createBlog(formData).subscribe(() => {
        this.loadBlogs();
        this.resetForm();
        this.isFormVisible = false
      });
    }
  }

  // Edit an blog (populate form with blog details)
  editBlog(blog: any) {
    this.isFormVisible = true;
    this.form.patchValue({
      id: blog.id,
      name: blog.name,
      content: blog.content,
      is_actif: blog.is_actif
    });
  }

  createNewBlog() {
    this.isFormVisible = true;
    this.form.patchValue({
      id: null,
      name: "",
      content: "",
      is_actif: ""
    });

  }

  // Delete an blog
  deleteBlog(id: string) {
    this.blogService.deleteBlog(id).subscribe(() => {
      this.loadBlogs();
    });
  }

  // Toggle form visibility and reset the form if hiding it
  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
    if (!this.isFormVisible) {
      this.resetForm(); // Reset form if form is hidden
    }
  }

  // Reset the form
  resetForm() {
    this.form.reset({
      id: '',
      name: '',
      content: '',
      is_actif: true
    });
  }
}
