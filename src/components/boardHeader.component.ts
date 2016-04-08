import {Component, ChangeDetectionStrategy, EventEmitter, Input, Output} from 'angular2/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'board-header',
    template: `
        <header>
            <h2>{{title}}</h2>
            <button (click)="menuButtonClicked.emit()"
                    class="dropdown-button">▼</button>
        </header>`,
})
export default class KanbanHeaderComponent {
    @Input() title: string;
    @Output() menuButtonClicked = new EventEmitter();
}
