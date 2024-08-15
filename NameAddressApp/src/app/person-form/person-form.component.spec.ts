import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PersonFormComponent } from './person-form.component';
import { PersonService } from '../services/person.service';
import { of, throwError } from 'rxjs';

describe('PersonFormComponent', () => {
  let component: PersonFormComponent;
  let fixture: ComponentFixture<PersonFormComponent>;
  let personService: PersonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonFormComponent],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        BrowserAnimationsModule
      ],
      providers: [PersonService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonFormComponent);
    component = fixture.componentInstance;
    personService = TestBed.inject(PersonService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save person and display saved data', () => {
    const mockPerson = { name: 'John Doe', address: '123 Main St' };
    spyOn(personService, 'savePerson').and.returnValue(of(mockPerson));

    component.person = mockPerson;
    component.onSubmit();

    expect(component.savedPerson).toEqual(mockPerson);
    expect(component.errorMessage).toBe('');
  });

  it('should display error message on failure', () => {
    const mockError = { error: { Message: 'Name and Address cannot be empty.' } };
    spyOn(personService, 'savePerson').and.returnValue(throwError(mockError));

    component.person = { name: '', address: '123 Main St' };
    component.onSubmit();

    expect(component.savedPerson).toBeUndefined();
    expect(component.errorMessage).toBe('Name and Address cannot be empty.');
  });
});
