import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { SocietyComponent } from './register/society/society.component';
import {Routes , RouterModule} from '@angular/router';
import { BuildingComponent } from './register/building/building.component';
import { OwnerComponent } from './register/owner/owner.component';
import { FlatComponent } from './register/flat/flat.component';
import {HttpClientModule} from '@angular/common/http';
const routes: Routes = [
  {path : 'society' , component: SocietyComponent},
  {path : 'building' , component: BuildingComponent},
  {path : 'flat' , component: FlatComponent},
  {path : 'owner' , component: OwnerComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SocietyComponent,
    BuildingComponent,
    OwnerComponent,
    FlatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
