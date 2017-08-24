import { Component, Input } from '@angular/core';
import { Align } from '../buttonGroup/buttonGroup.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Input() socialLinks: Object[] = [];
    @Input() menuItems: Object[] = [];
    @Input() showSearchbar: Boolean = true;
    menuAlign = Align.Left;
    socialAlign = Align.Right;
    id = 'header';
}