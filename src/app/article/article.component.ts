import { Component, Input } from '@angular/core';
import { markdown } from 'markdown';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent {
    @Input() content: String;
    id = 'article';
}