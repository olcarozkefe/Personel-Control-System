import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {TableModule} from 'primeng/table';
import {HomeComponent} from './home.component';
import {Button, ButtonDirective} from 'primeng/button';
import {FormsModule} from "@angular/forms";
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TableModule,
    Button,
    ButtonDirective,
    FormsModule,
    DialogModule,
    InputTextModule,
    ToastModule,
    ConfirmDialogModule
  ]
})
export class HomeModule { }
