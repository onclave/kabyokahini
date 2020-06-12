import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HompageComponent } from './hompage/hompage.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
	declarations: [HompageComponent],
	exports: [],
	imports: [
		CommonModule,
		HomeRoutingModule,
		FlexLayoutModule
	]
})
export class HomeModule { }
