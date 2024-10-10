import { Component } from '@angular/core';
import { Blog, BlogService } from 'src/app/shared/service/backend/blog.service';
import { DynamicContentService } from 'src/app/shared/service/backend/dynamic-content.service';

@Component({
	selector: 'app-welcome-page',
	templateUrl: './welcome-page.component.html',
	styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {

	constructor(private blogService: BlogService, private dynamicContentService: DynamicContentService) {
		this.callDynamicContent()
		this.callBlogs()
	}

	blogs: Blog[] = [];
	welcomeContent: string = "";


	callBlogs() {
		this.blogService.getActifsBlogs().subscribe(
			(response) => {
				this.blogs = response
				console.log('Liste des blogs:', response);
			},
			(error) => {
				console.error('Erreur lors de la récupération des blogs:', error);
			})
	}

	callDynamicContent() {
		this.dynamicContentService.getDynamicContentByCode("WELCOME_PAGE").subscribe(
			(response) => {
				console.log(response)
				this.welcomeContent = response.content
			},
			(error) => {
				console.error('Erreur lors de la récupération des blogs:', error);
			})

	}
}
