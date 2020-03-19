import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { RecordTableComponent } from './components/record-table/record-table.component';
import { WorldStatsComponent } from './components/world-stats/world-stats.component';
import { CreateStoreModule } from './core/store/create-store.module';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [AppComponent, HomeComponent, WorldStatsComponent, RecordTableComponent],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production
        }),
        BrowserAnimationsModule,
        HttpClientModule,
        CreateStoreModule,
        MatCardModule,
        MatTableModule,
        MatSortModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
