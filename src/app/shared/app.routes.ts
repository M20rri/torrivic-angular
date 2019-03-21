import { Routes } from '@angular/router';
import { HomeComponent } from "./../home/home.component";
import { StructuralComponent } from "./../structural/structural.component";
import { InteractionComponent } from "./../interaction/interaction.component";
import { PipesComponent } from "./../pipes/pipes.component";
import { ServiceComponent } from "./../service/service.component";

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
  { path: "**", redirectTo: "", pathMatch: "full" }
];
