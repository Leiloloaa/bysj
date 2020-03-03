import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoodscatePage } from './goodscate.page';

describe('GoodscatePage', () => {
  let component: GoodscatePage;
  let fixture: ComponentFixture<GoodscatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodscatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoodscatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
