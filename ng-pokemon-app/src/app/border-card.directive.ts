import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
    this.setHeight(100);
    this.setBorder('#f5f5f5');
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder('#009688');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder('#f5f5f5');
  }

  setHeight(height: number){
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string){
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
