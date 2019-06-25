import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { UserComponent } from './user/user/user.component';
import { MatButtonModule, 
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
         MatRadioModule,
         MatCheckboxModule,
         MatChipsModule,
         MatSnackBarModule,
         MatGridListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { UserAddComponent } from './user/user-add/user-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { TeacherComponent } from './teacher/teacher/teacher.component';
import { TeacherAddComponent } from './teacher/teacher-add/teacher-add.component';
import { TeacherDetailComponent } from './teacher/teacher-detail/teacher-detail.component';
import { TeacherUpdateComponent } from './teacher/teacher-update/teacher-update.component';
import { CourseAddComponent } from './course/course-add/course-add.component';
import { CourseComponent } from './course/course/course.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { CourseUpdateComponent } from './course/course-update/course-update.component';
import { StudentComponent } from './student/student/student.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentUpdateComponent } from './student/student-update/student-update.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
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
    MatRadioModule,
    MatCheckboxModule,
    MatChipsModule,
    MatSnackBarModule,
    MatGridListModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    UserAddComponent,
    UserUpdateComponent,
    UserDetailComponent,
    TeacherComponent,
    TeacherAddComponent,
    TeacherDetailComponent,
    TeacherUpdateComponent,
    CourseAddComponent,
    CourseComponent,
    CourseDetailComponent,
    CourseUpdateComponent,
    StudentComponent,
    StudentAddComponent,
    StudentUpdateComponent,
    StudentDetailComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
