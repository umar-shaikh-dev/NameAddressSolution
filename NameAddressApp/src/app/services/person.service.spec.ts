import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PersonService, Person } from './person.service';

describe('PersonService', () => {
  let service: PersonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PersonService]
    });
    service = TestBed.inject(PersonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save person data', () => {
    const mockPerson: Person = { name: 'John Doe', address: '123 Main St' };

    service.savePerson(mockPerson).subscribe(person => {
      expect(person).toEqual(mockPerson);
    });

    const req = httpMock.expectOne('https://localhost:4100/api/person');
    expect(req.request.method).toBe('POST');
    req.flush(mockPerson);
  });

  it('should handle error when saving person fails', () => {
    const mockError = { status: 400, statusText: 'Bad Request' };

    service.savePerson({ name: '', address: '123 Main St' }).subscribe({
      next: () => fail('should have failed with 400 error'),
      error: (error) => {
        expect(error.status).toBe(400);
        expect(error.statusText).toBe('Bad Request');
      }
    });

    const req = httpMock.expectOne('https://localhost:4100/api/person');
    req.flush({}, mockError);
  });
});
