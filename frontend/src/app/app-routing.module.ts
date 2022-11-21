import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditbookComponent } from './components/editbook/editbook.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddbooksComponent } from './pages/addbooks/addbooks.component';
import { BooksComponent } from './pages/books/books.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'addbooks', component:AddbooksComponent},
  { path: 'editPage/:id', component: EditbookComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: '', component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
