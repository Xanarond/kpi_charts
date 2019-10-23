import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AboutExtraComponent} from '../about-extra/about-extra.component';
import {AboutComponent} from './about.component';


@NgModule({
    declarations: [
        AboutComponent,
        AboutExtraComponent
    ],
    imports: [RouterModule.forChild([
        {
            path: '', component: AboutComponent, children: [
                {path: 'extra', component: AboutExtraComponent}
            ]
        },
    ])
    ],
    exports: [RouterModule]
})

export class AboutModule {

}
