import { Component, Injector, OnInit } from '@angular/core';

import { HomeContainer } from './home.container';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent extends HomeContainer implements OnInit {
    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit(): void {
        this.dataFacade.fetchData();
    }
}
