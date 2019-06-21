import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule,
  MatListModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule, MatTableModule,
  MatToolbarModule, MatRadioModule  } from '@angular/material';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TeacherComponent } from './teacher/teacher/teacher.component';
import { TeacherAddComponent } from './teacher/teacher-add/teacher-add.component';
import { TeacherDetailComponent } from './teacher/teacher-detail/teacher-detail.component';
import { TeacherUpdateComponent } from './teacher/teacher-update/teacher-update.component';
import { CourseComponent } from './course/course/course.component';
import { CourseAddComponent } from './course/course-add/course-add.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { CourseUpdateComponent } from './course/course-update/course-update.component';
import { StudentComponent } from './student/student/student.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentUpdateComponent } from './student/student-update/student-update.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserAddComponent,
    UserDetailComponent,
    UserUpdateComponent,
    MenuComponent,
    TeacherComponent,
    TeacherAddComponent,
    TeacherDetailComponent,
    TeacherUpdateComponent,
    CourseComponent,
    CourseAddComponent,
    CourseDetailComponent,
    CourseUpdateComponent,
    StudentComponent,
    StudentAddComponent,
    StudentDetailComponent,
    StudentUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
