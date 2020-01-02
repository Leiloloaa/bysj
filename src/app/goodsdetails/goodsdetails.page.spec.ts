import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoodsdetailsPage } from './goodsdetails.page';

describe('GoodsdetailsPage', () => {
  let component: GoodsdetailsPage;
  let fixture: ComponentFixture<GoodsdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoodsdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
