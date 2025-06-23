import { Component } from '@angular/core';

@Component({
  selector: 'app-bases-promocion-screen',
  templateUrl: './bases-promocion-screen.component.html',
  styleUrls: ['./bases-promocion-screen.component.scss']
})
export class BasesPromocionScreenComponent {


  public isMobile(tipo: number){
    switch(tipo){
      case 1:
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
          return "style-mobile";
        }else{
          return "interior-codigos";
        }
        break;
      case 2:
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
          return "style-mobile";
        }else{
          return "interior-codigos-registrados";
        }
        break;
    }
  }

}


