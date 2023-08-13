import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {

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
