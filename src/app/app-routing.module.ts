import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursLandingPageComponent } from './cours-landing-page/cours-landing-page.component';
import { AppComponent } from './app.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';


const routes: Routes = [
  { path: '', component: AllCoursesComponent},
 { path: 'courses', component: AllCoursesComponent},
 { path: 'cours', component: CoursLandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
