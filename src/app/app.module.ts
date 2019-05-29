import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from "@angular/common/http";
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
import { TorrivicService } from './shared/torrivic.service';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { FormComponent } from './form/form.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { AddOreditTaskComponent } from './task-manager/add-oredit-task/add-oredit-task.component';
import { EvenPipe } from './shared/even.pipe';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from "./shared/auth.guard";

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule, NgMultiSelectDropDownModule.forRoot(), BrowserAnimationsModule, ToastrModule.forRoot()],
  declarations: [AppComponent, NavBarComponent, HomeComponent, StructuralComponent, InteractionComponent, ChildComponent, PipesComponent, ServiceComponent, UserdetailComponent, FormComponent, TaskManagerComponent, AddOreditTaskComponent, EvenPipe],
  bootstrap: [AppComponent],
  providers: [TorrivicService, AuthService, AuthGuard],
})
export class AppModule { }
