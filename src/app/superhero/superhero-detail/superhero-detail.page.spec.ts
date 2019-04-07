import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroDetailPageComponent } from './superhero-detail.page';
import { SuperheroApiService } from '../superhero-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('SuperheroDetailPageComponent', () => {
  let component: SuperheroDetailPageComponent;
  let fixture: ComponentFixture<SuperheroDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SuperheroDetailPageComponent],
      imports: [RouterTestingModule.withRoutes([]), HttpClientModule],
      providers: [SuperheroApiService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
