import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './post/post.component';
import {AppRoutingModule} from './app-routing.module';
import {ErrorPageComponent} from './error-page/error-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDropdownModule} from 'ngx-bootstrap';
import {DropdownBasicComponent} from './dropdown-basic/dropdown-basic.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PostsComponent,
        PostComponent,
        ErrorPageComponent,
        DropdownBasicComponent,
    ],
    imports: [
        BrowserModule,
        BsDropdownModule.forRoot(),
        AppRoutingModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
