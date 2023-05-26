import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
      n1="";
      n2="";
      r=""
      r1=0
      add(){
        this.r1=parseInt(this.n1)+parseInt(this.n2)
        this.r=this.r1.toString();
      }
      sub(){
        this.r1=parseInt(this.n1)-parseInt(this.n2)
        this.r=this.r1.toString();
      }
      mul(){
        this.r1=parseInt(this.n1)*parseInt(this.n2)
        this.r=this.r1.toString();
      }
      div(){
        this.r1=parseInt(this.n1)/parseInt(this.n2)
        this.r=this.r1.toString();
      }

}
