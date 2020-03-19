import { Component, Input } from '@angular/core';
import { IRecord } from 'src/app/core/models/data';

@Component({
    selector: 'app-world-stats',
    templateUrl: './world-stats.component.html'
})
export class WorldStatsComponent {
    @Input() worldStats: IRecord;
    constructor() {}
}
