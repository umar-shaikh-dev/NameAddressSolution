import { Component } from '@angular/core';
import { PersonService, Person } from '../services/person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent {
  person: Person = { name: '', address: '' };
  savedPerson?: Person;
  errorMessage: string = '';

  constructor(private personService: PersonService) { }

  onSubmit(): void {
    this.errorMessage = '';
    this.personService.savePerson(this.person).subscribe({
      next: result => {
        this.savedPerson = result;
        this.errorMessage = '';
      },
      error: error => {
        this.savedPerson = undefined;
        this.errorMessage = error.error.Message || 'An error occurred while saving the person.';
      }
    });
  }
}
