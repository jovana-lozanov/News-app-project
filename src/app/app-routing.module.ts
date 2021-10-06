import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsContentComponent } from './news-content/news-content.component';

const routes: Routes = [
  {path: "technology", component: NewsContentComponent, data: {category: "technology" }},
  {path: "sports", component: NewsContentComponent, data: {category: "sports"}},
  {path: "", redirectTo: "/technology", pathMatch: "full"}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
