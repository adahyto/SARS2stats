import { AfterViewInit, Component, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IRecord } from 'src/app/core/models/data';

@Component({
    selector: 'app-record-table',
    templateUrl: './record-table.component.html'
})
export class RecordTableComponent implements AfterViewInit {
    @Input() columnsToDisplay: string[];
    @Input() records: IRecord[];
    dataSource: MatTableDataSource<IRecord>;
    @ViewChild(MatSort) sort: MatSort;
    constructor(private changeDetector: ChangeDetectorRef) {}

    ngAfterViewInit(): void {
        this.dataSource = new MatTableDataSource(this.records);
        this.changeDetector.detectChanges();
        setTimeout(() => {
            this.dataSource.sort = this.sort;
        }, 200);
    }
}
