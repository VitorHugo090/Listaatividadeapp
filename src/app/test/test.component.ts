import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {

  public items = [
    {description: 'Item 1', id: 1},
    {description: 'Item 2', id: 2},
    {description: 'Item 3', id: 3},
    {description: 'Item 4', id: 4}
  ]
  public mostrarTitulo = true;
  mostrarbotao: string = "Mostrar titulo";
  tirarbotao: string = "tirar titulo"
  TituloBotao: Boolean = true;
  
  public botaoStatusDeTitulo(){
    if(this.mostrarTitulo) {
      this.mostrarTitulo = false;
    }
    else {
      this.mostrarTitulo = true;
    }
    this.TituloBotao = !this.TituloBotao;
  }

}
