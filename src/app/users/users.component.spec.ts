import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {UsersService} from "../services/users.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ UsersComponent ],
      providers: [UsersService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Users List'`, () => {
    expect(component.title).toEqual('Users List');
  });

  it(`should render title 'Users List'`, () => {
    const debug = fixture.debugElement.query(By.css('h1')).nativeElement as HTMLElement;
    expect(debug.textContent).toContain('Users List');
  });


});
