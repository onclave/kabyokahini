import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { KabyoContentComponent } from './kabyo-content/kabyo-content.component';
import { KahiniContentComponent } from './kahini-content/kahini-content.component';
import { HomeComponent } from './home/home.component';
import { ContentListComponent } from './content-list/content-list.component';

@NgModule({
    declarations: [
        AppComponent,
        KabyoContentComponent,
        KahiniContentComponent,
        HomeComponent,
        ContentListComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        AppRoutingModule,
        FlexLayoutModule,

        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
