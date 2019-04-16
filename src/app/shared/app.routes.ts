import { Routes } from '@angular/router';
import { HomeComponent } from "./../home/home.component";
import { StructuralComponent } from "./../structural/structural.component";
import { InteractionComponent } from "./../interaction/interaction.component";
import { PipesComponent } from "./../pipes/pipes.component";
import { ServiceComponent } from "./../service/service.component";
import { FormComponent } from "./../form/form.component";
import { TaskManagerComponent } from "./../task-manager/task-manager.component";
import { AddOreditTaskComponent } from "./../task-manager/add-oredit-task/add-oredit-task.component";
import { UserdetailComponent } from "./../userdetail/userdetail.component";

export const appRoutes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  {
    path: "structural",
    component: StructuralComponent,
    pathMatch: "full"
  },
   {
    path: "interaction",
    component: InteractionComponent,
    pathMatch: "full"
  },
  {
    path: "pipes",
    component: PipesComponent,
    pathMatch: "full"
  },
   {
    path: "service",
    component: ServiceComponent,
    pathMatch: "full"
  },
   {
    path: "user/:id",
    component: UserdetailComponent,
    pathMatch: "full"
  },
  {
    path: "forms",
    component: FormComponent,
    pathMatch: "full"
  },
  {
    path: "taskManager",
    component: TaskManagerComponent,
    pathMatch: "full"
  },
  {
    path: "addorEdit",
    component: AddOreditTaskComponent,
    pathMatch: "full"
  },
  {
    path: "addorEdit/:id",
    component: AddOreditTaskComponent,
    pathMatch: "full"
  },
  { path: "**", redirectTo: "", pathMatch: "full" }
];