import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationControlsComponent } from './navigation-controls/navigation-controls.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
	declarations: [NavigationControlsComponent],
	exports: [
		NavigationControlsComponent
	],
	imports: [
		CommonModule,
		FlexLayoutModule,
		MatMenuModule,
		MatIconModule,
		MatButtonModule
	]
})
export class NavigationModule { }
