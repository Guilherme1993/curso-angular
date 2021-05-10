import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  //passando o p no selector, limito a aplicação da diretiva apenas a parágrafos.

  //Na própria documentação do Angular, pedem para usar o elementRef só quando necessário, pois ele altera
  //diretamente o DOM e pode até facilitar ataques na aplicação, nesse caso utilizaremos o Renderer como alternativa.

  constructor(private _elementRef: ElementRef,
    private _renderer: Renderer) {
    // console.log(this._elementRef);
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }

}
