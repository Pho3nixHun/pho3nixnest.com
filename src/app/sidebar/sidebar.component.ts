import { Component, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {
    @ViewChild('highlight') higlightElement: ElementRef; 
    @ViewChild('container') container: ElementRef;
    @Input() menuItems = []; 
    id = 'sidebar';

    isLoading: boolean = false;

    constructor(private elRef: ElementRef) { }
    
    private get menuItemElements(): HTMLAnchorElement[] {
        return (Array.from(this.container.nativeElement.children) as HTMLElement[]).filter(el => el instanceof HTMLAnchorElement) as HTMLAnchorElement[];
    }

    ngAfterViewInit() {
        const selectedIndex = this.menuItems.findIndex(item => item.selected) || 0;
        this.menuItemElements[selectedIndex].click();
    }
    
    select = (item, { srcElement: { offsetTop, offsetHeight } }) => {
        const previousItem = this.menuItems.forEach(item => item.selected = false);
        const el = this.higlightElement.nativeElement;
        const { offsetHeight: containerHeight } = this.container.nativeElement;
        console.log(offsetTop, el.style.top);
        if (offsetTop < el.offsetTop) {
            // target is above
            el.style.transition = `
                top 350ms ease,
                bottom 350ms ease 175ms
            `
        } else {
            // target is below
            el.style.transition = `
                top 350ms ease 175ms,
                bottom 350ms ease
            `
        }
        el.style.top = `${offsetTop}px`;
        el.style.bottom = `${containerHeight - (offsetHeight + offsetTop)}px`;
        item.selected = true;
        this.isLoading = true;
        setTimeout(() => this.isLoading = false, 3500);
    }
}