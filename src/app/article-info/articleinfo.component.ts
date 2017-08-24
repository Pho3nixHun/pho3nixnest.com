import { Component, Input } from '@angular/core';

@Component({
    selector: 'article-info',
    templateUrl: './articleInfo.component.html',
    styleUrls: ['./articleInfo.component.css']
})
export class ArticleInfoComponent {
    @Input() sections = [];
    id = 'articleinfo';
}