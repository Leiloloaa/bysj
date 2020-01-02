import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddgoodsPage } from './addgoods.page';

describe('AddgoodsPage', () => {
  let component: AddgoodsPage;
  let fixture: ComponentFixture<AddgoodsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgoodsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddgoodsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
