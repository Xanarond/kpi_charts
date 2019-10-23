import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DamretComponent} from './damret.component';

@NgModule({
    declarations: [
        DamretComponent
    ],
    imports: [RouterModule.forChild([
        {
            path: '', component: DamretComponent
        },
    ])
    ],
    exports: [RouterModule]
})

export class DamretModule {

}
