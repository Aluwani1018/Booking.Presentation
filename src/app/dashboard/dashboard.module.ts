import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { RootComponent } from './root/root.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, SettingsComponent, RootComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DashboardModule { }
