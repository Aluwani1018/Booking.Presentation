import { Directive, ElementRef, Renderer2, OnInit } from "@angular/core";

@Directive({ selector: '[appFocus]' })

export class myFocus implements OnInit {
    constructor(private el: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
        this.renderer.selectRootElement(this.el.nativeElement,true).scrollIntoView()
    }
}