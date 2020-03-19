import { Component, Input } from '@angular/core';
import { IRecord } from 'src/app/core/models/data';

@Component({
    selector: 'app-world-stats',
    templateUrl: './world-stats.component.html',
    styleUrls: ['./world-stats.component.scss']
})
export class WorldStatsComponent {
    @Input() lastUpdated: string;
    @Input() worldStats: IRecord;
    constructor() {}
}
