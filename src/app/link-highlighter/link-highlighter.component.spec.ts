import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkHighlighterComponent } from './link-highlighter.component';

describe('LinkHighlighterComponent', () => {
  let component: LinkHighlighterComponent;
  let fixture: ComponentFixture<LinkHighlighterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkHighlighterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkHighlighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
