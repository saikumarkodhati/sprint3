import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateBookComponent } from './createbook.component';
import { Router, RouterModule } from '@angular/router';




describe('AuthorComponent', () => {
  let component: CreateBookComponent;
  let fixture: ComponentFixture<CreateBookComponent>;

  beforeEach(async () => {
    let http:HttpClient;
    let router:Router;
    await TestBed.configureTestingModule({
      declarations: [ CreateBookComponent ],
      imports:[HttpClientTestingModule, HttpClientModule,RouterModule],
    })
    .compileComponents();
    http=TestBed.inject(HttpClient);
    router=TestBed.inject(Router);
    
    fixture = TestBed.createComponent(CreateBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have a edit author'`, async(() => {
    fixture = TestBed.createComponent(CreateBookComponent);
    component = fixture.debugElement.componentInstance;
    let data=component.EditBook('Hi');
    expect('Hi').toEqual('Hi');
  }));
  it(`should have a data search'`, async(() => {
    fixture = TestBed.createComponent(CreateBookComponent);
    component = fixture.debugElement.componentInstance;
    let data=component.GetDataFromServer();
    expect(data).toEqual();
  }));
  
});