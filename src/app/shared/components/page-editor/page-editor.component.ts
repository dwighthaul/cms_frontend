import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-page-editor',
	templateUrl: './page-editor.component.html',
	styleUrls: ['./page-editor.component.css']
})
export class PageEditorComponent {

	constructor(private httpClient: HttpClient) { }

	imageToUpload: File | undefined;


	upload() {
		const imageForm = new FormData();
		if (this.imageToUpload) {
			console.log("Image presente")
			imageForm.append('image', this.imageToUpload);
			this.httpClient.post('http://localhost:3000/fileUpload/uploadDocument', imageForm).subscribe((data: any) => {
				console.log(data)
			});
		} else {
			console.log("Image NON presente")
		}

	}

	modules = {
		toolbar: [
			[{ font: [] }, { size: [] }],
			['bold', 'italic', 'underline', 'strike'],
			[{ color: ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"] }, { background: [] }],
			[{ list: 'ordered' }, { list: 'bullet' }],
			[{ align: [] }],
			['link', 'image', 'video']
		]
	};


	types = [{
		value: "images",
		name: "Images",
		format: {
			images: []
		}
	}, {
		value: "textimage",
		name: "Texte + Image",
		format: {
			contenu: "",
			image: ""
		}
	},
	{
		value: "text",
		name: "Text",
		format: {
			contenu: ""
		}
	},
	{
		value: "separator",
		name: "Separateur",
		format: {
			contenu: ""
		}
	},
	]

	ajouterUneImage(contenu: any) {
		contenu.images.push({ src: "" });
	}

	typePageAAjouter: string | undefined;


	@Input() page: any;


	ajouterUnParagraphe() {

		var type = this.types.find((i) => { return (this.typePageAAjouter != undefined && (i.value == this.typePageAAjouter)) })

		if (!type) {
			return
		}

		this.page.contenu.push({
			type: this.typePageAAjouter,
			...type?.format

		});
	}

	// TODO : Supprimer
	supprimerParagraphe(content: any) {
		const index = this.page.contenu.indexOf(content);
		this.page.contenu.splice(index, 1);
	}

	supprimerLien(contenu: any, image: any) {
		const index = contenu.images.indexOf(image);
		contenu.images.splice(index, 1);


	}


}
