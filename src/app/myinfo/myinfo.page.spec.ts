import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyinfoPage } from './myinfo.page';

describe('MyinfoPage', () => {
  let component: MyinfoPage;
  let fixture: ComponentFixture<MyinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
