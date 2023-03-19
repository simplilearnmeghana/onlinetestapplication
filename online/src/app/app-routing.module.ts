import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component'
import { ListRestoComponent } from './list-resto/list-resto.component'
import {PageNotFoundComponent} from './pageNotFoundComponent'
import {HomeComponent} from './home/home.component'
import { ListBestRestoComponent } from './list-best-resto/list-best-resto.component';
//If your application consists of many components, then it takes a long time to load all components when an app is downloaded, which degrades the user experience.
const routes: Routes = [{ component: HomeComponent, path: "" },{ component: AddRestoComponent, path: "add" },
{ component: ListRestoComponent, path: "list" },{ component:  ListBestRestoComponent , path: "list_5star" },
{path:"**",component:PageNotFoundComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
