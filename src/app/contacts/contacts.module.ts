import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactDitailsComponent } from './contact-ditails/contact-ditails.component';

@NgModule({
  declarations: [ContactsListComponent, CreateContactComponent, ContactDitailsComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ContactsListComponent, CreateContactComponent],
})
export class ContactsModule {}