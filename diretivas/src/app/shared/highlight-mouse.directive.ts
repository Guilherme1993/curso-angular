import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  // HostListener vai ficar escutando evento no hospedeiro da diretiva (nesse caso a tag p do html)
  // HostBinding permite a associação de um atributo ou classe do html para uma variável

  @HostListener('mouseenter') onMouseOver() {
    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement,
    //   'background-color', 'yellow'
    // );

    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement,
    //   'background-color', 'white'
    // );

    this.backgroundColor = 'white';
  }

  // -- JS -- Se não precisar de nenhuma manipulação
  // @HostBinding('style.backgroundColor') backgroundColor: string;

  // -- TS -- Se precisar de alguma manipulação
  @HostBinding('style.backgroundColor') get setColor() {
    //pode colocar qualquer código extra aqui, se precisar fazer mais alguma alteração
    return this.backgroundColor;
  }
  private backgroundColor: string;

  constructor(
    // private _elementRef: ElementRef,
    // private _renderer: Renderer
  ) { }

}
