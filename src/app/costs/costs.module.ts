import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CostsComponent} from './costs.component';

@NgModule({
    declarations: [
        CostsComponent
    ],
    imports: [RouterModule.forChild([
        {
            path: '', component: CostsComponent
        },
    ])
    ],
    exports: [RouterModule]
})

export class CostsModule {

}
