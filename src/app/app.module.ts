import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CoursCardComponent } from './cours-card/cours-card.component';
import { LessonComponent } from './lesson/lesson.component';
import { CoursLandingPageComponent } from './cours-landing-page/cours-landing-page.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursCardComponent,
    LessonComponent,
    CoursLandingPageComponent,
    AllCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
