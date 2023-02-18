import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-modal-window',
    templateUrl: './modal-window.component.html',
    styleUrls: ['./modal-window.component.scss'],
})
export class ModalWindowComponent {
    @Input() title = '';
    @Input() visible = false;

    hideModal() {
        this.visible = false;
    }

    openModal() {
        this.visible = true;
    }

    stopPropagation(e: MouseEvent) {
        e.stopPropagation();
    }
}
