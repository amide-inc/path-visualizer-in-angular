import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DfsComponent } from './components/dfs/dfs.component';


const routes: Routes = [
  {path : 'dfs', component: DfsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
