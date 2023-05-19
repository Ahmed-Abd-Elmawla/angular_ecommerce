import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
     path:"",
     component:ProductListComponent
  },
  {
  path:"register",
  component:RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent
    },
    {
      path:"addtocart",
      component:AddToCartComponent
      },
      {
        path:"product-details/:id",
        component:ProductDetailsComponent
        },
        {
          path:"**",
          component:ErrorComponent
          },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
