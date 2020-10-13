import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  tittle = 'Add Article';
  articleContent = 'that is article content';
  caretPos: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getCaretPos(oField) {
    if (oField.selectionStart || oField.selectionStart == '0') {
       this.caretPos = oField.selectionStart;
    }
  }

  addImage(): void{
    this.articleContent = [this.articleContent.slice(0, this.caretPos), "Image", this.articleContent.slice(this.caretPos)].join('');
  }

}
