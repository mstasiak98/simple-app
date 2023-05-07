import {fakeAsync, TestBed, tick} from '@angular/core/testing';

import { UsersService } from './users.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('UsersService', () => {
  let service: UsersService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UsersService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return users list', (done) => {

    //prepare dummy reponse
    let expected = [
      {
        id: 1,
        name: 'Mikolaj',
        email: 'mikolaj@wp.pl'
      }
    ]

    //Perform request - (fake async wont be called unless tick() is called)
    service.getUsers().subscribe(data => {
      expect(data).toEqual(expected);
      done();
    })

    //expect a call to this url
    const req = httpTestingController.expectOne("https://jsonplaceholder.typicode.com/users");

    //expect method to be GET
    expect(req.request.method).toEqual("GET");

    //Set fake async to respond with this reponse
    req.flush(expected);

  });


});
