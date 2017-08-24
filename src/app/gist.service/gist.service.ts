import { Injectable } from '@angular/core';
import { Request } from 'assets/request';
import { markdown } from 'markdown';

@Injectable()
export class GistService {
    private baseUrl = 'https://api.github.com/gists';
    private endPoint = new Request({
        method: Request.METHODS.GET,
        json: true
    });
    gist(id) {
        return this.endPoint.get({ url: `${this.baseUrl}/${id}` }).promise;
    }
    article(id) {
        return this.gist(id)
        .then(({ files: { 'article.md': { content }, 'meta.json': { content: meta } } }) => {
            return { 
                content: markdown.toHTML(content),
                meta: JSON.parse(meta)
            };
        });
    }
}