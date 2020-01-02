import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyorderPage } from './myorder.page';

describe('MyorderPage', () => {
  let component: MyorderPage;
  let fixture: ComponentFixture<MyorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyorderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
