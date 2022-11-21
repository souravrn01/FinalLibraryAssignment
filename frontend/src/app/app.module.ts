
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './pages/books/books.component';
import { AddbooksComponent } from './pages/addbooks/addbooks.component';
import { NavbarbooksComponent } from './components/navbarbooks/navbarbooks.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DisplayComponent } from './components/display/display.component';
import { BookformComponent } from './components/bookform/bookform.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { EditbookComponent } from './components/editbook/editbook.component';



@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AddbooksComponent,
    NavbarbooksComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DisplayComponent,
    BookformComponent,
    EditbookComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
    

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
