import { Component, Input } from '@angular/core';

export enum Align {
    Left,
    Right
}

@Component({
    selector: 'button-group',
    templateUrl: './buttonGroup.component.html',
    styleUrls: ['./buttonGroup.component.css']
})
export class ButtonGroup {
    @Input() buttons: Object[] = [];
    @Input() align: Align = Align.Left;
    @Input() iconClass = 'mono-social-icon';
    getLayoutAlign() {
        return {
            'layout-align-end-center': this.align === Align.Right
        }
    }
    id = 'buttonGroup';
    click = (sender, $event) => {
        if (sender.link) window.open(sender.link, '_blank');
        else if (sender.click instanceof Function) sender.click(sender, $event);
    }
}