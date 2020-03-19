import { Component, Injector, OnInit } from '@angular/core';

import { HomeContainer } from './home.container';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent extends HomeContainer implements OnInit {
    columnsToDisplay = ['country', 'province', 'confirmed', 'deaths', 'recovered'];
    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit(): void {
        this.dataFacade.fetchData();
    }
}
