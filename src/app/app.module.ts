import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from "./shared/app.routes";
import { StructuralComponent } from './structural/structural.component';
import { InteractionComponent } from './interaction/interaction.component';
import { ChildComponent } from './child/child.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServiceComponent } from './service/service.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule , RouterModule.forRoot(appRoutes),],
  declarations: [ AppComponent, NavBarComponent, HomeComponent, StructuralComponent, InteractionComponent, ChildComponent, PipesComponent, ServiceComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
