import { AuInputModule } from './lib/au-input.module';
import { TestBed, async, ComponentFixture } from "@angular/core/testing";

import { AppComponent } from "./app.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";


describe("AppComponent", () => {
    let component: AppComponent,
        fixture: ComponentFixture<AppComponent>,
        el: DebugElement,
        emailField: DebugElement;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [AuInputModule]
        }).compileComponents();
    }));

    beforeEach(async(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        el = fixture.debugElement;
        emailField = el.query(By.css('#email-field'));

        fixture.detectChanges()
    }));

    it("should create the app", async(() => {
        expect(component).toBeTruthy();
    }));

    it("should create a font awesome email input", async(() => {
        expect(emailField).toBeTruthy();
    }));


    it("should include the correct email icon inside the email input", async(() => {
        console.log(emailField.query(By.css('i.fa.fa-envelope')))
        expect(emailField.query(By.css('i.fa.fa-envelope'))).toBeTruthy();
    }));


});
