import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatapsdPage } from './updatapsd.page';

describe('UpdatapsdPage', () => {
  let component: UpdatapsdPage;
  let fixture: ComponentFixture<UpdatapsdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatapsdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatapsdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
