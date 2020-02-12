import { AuthGuard } from './guads/auth.guard';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { LoginComponent } from './components/backoffice/login/login.component';
import { RegisterComponent } from './components/backoffice/register/register.component';
import { ArticlesEditComponent } from './components/backoffice/articles-edit/articles-edit.component';
import { ArticlesAddComponent } from './components/backoffice/articles-add/articles-add.component';
import { ArticlesListComponent } from './components/backoffice/articles-list/articles-list.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "blog", children: [
      { path: "", component: ArticlesListComponent },
      { path: "create", component: ArticlesAddComponent },
      { path: ":id/edit", component: ArticlesEditComponent },

    ], canActivate: [AuthGuard]
  },

  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
