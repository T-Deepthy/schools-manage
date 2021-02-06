import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EightComponent } from './eight/eight.component';
import {HomeComponent} from './home/home.component'
import { NineComponent } from './nine/nine.component';
import { EditComponent } from './pages/students/edit/edit.component';
import { TenComponent } from './ten/ten.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'eighth', component: EightComponent },
  { path: 'ninth', component: NineComponent },
  { path: 'tenth', component: TenComponent },
  { path: 'ninth/student/add/:id', component: EditComponent },
  { path: 'ninth/student/edit/:id', component: EditComponent },
  { path: 'eighth/student/add', component: EditComponent },
  { path: 'eighth/student/edit/:id', component: EditComponent },
  { path: 'tenth/student/add/:id', component: EditComponent },
  {path: 'tenth/student/edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
