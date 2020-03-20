import { AfterViewInit, ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IRecord } from 'src/app/core/models/data';

@Component({
    selector: 'app-record-table',
    templateUrl: './record-table.component.html',
    styleUrls: ['./record-table.component.scss']
})
export class RecordTableComponent implements AfterViewInit {
    @Input() title: string;
    @Input() columnsToDisplay: string[];
    @Input() records: IRecord[];
    dataSource: MatTableDataSource<IRecord>;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    loaded: boolean;
    constructor(private changeDetector: ChangeDetectorRef) {}

    ngAfterViewInit(): void {
        this.dataSource = new MatTableDataSource(this.records);
        this.changeDetector.detectChanges();
        setTimeout(() => {
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.loaded = true;
        }, 1000);
    }
}
