import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { DataEffects } from './data/data.effects';
import { DataFacade } from './data/data.facade';
import { reducers } from './register-reducers';
import { environment } from 'src/environments/environment';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production // Restrict extension to log-only mode
        }),
        EffectsModule.forRoot([DataEffects])
    ],
    providers: [DataFacade]
})
export class CreateStoreModule {}
