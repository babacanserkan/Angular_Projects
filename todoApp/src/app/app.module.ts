import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';

@NgModule({
  declarations: [TodoComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [TodoComponent],
})
export class AppModule {}
