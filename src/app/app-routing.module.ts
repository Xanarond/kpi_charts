import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './post/post.component';
import {ErrorPageComponent} from './error-page/error-page.component';

// http://localhost:4200/ -> HomeComponent
// http://localhost:4200/about -> AboutComponent
// http://localhost:4200/posts -> PostsComponent
// http://localhost:4200/about/extra -> PostsComponent

const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full', data: {animation: 'HomePage'}},
    {path: 'about', loadChildren: './about/about.module#AboutModule', data: {animation: 'AboutPage'}},
    {path: 'damret', loadChildren: './damret/damret.module#DamretModule', data: {animation: 'AboutPage'}},
    {path: 'costs', loadChildren: './costs/costs.module#CostsModule', data: {animation: 'AboutPage'}},
    {path: 'posts/:id', component: PostComponent},
    {path: 'error', component: ErrorPageComponent},
    {path: '**', redirectTo: '/error'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
