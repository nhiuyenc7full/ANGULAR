import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result: number = 0;
  input: any = this.result + '';
  addend: any = '';
  addends: string[] = [];
  operators = [];

  
  constructor() { }

  ngOnInit() {
  }

  onClickOperator(event){
    let before = this.input.length -1
    if(this.input !== '0' && 
    (this.input[before] !== "+" 
    && this.input[before] !== "-" 
    && this.input[before] !== "*" 
    && this.input[before] !== "/")) {
      this.input += event.target.value;
      this.operators.push(event.target.value);
    }
    console.log(this.operators)
    this.addends.push(this.addend);
    console.log(this.addends);
  }

  onClickNumber(event){
    let before = this.input.length -1;

    if(this.input === '0') this.input = "";
    this.input += event.target.value;
    
    
    if(this.input[before] !== "+" 
    && this.input[before] !== "-" 
    && this.input[before] !== "*" 
    && this.input[before] !== "/" ) this.addend += event.target.value;
    else  {
      this.addend = event.target.value;
    };
  }

  reset() {
    this.input = '0';
    this.addend = '';
    this.addends = [];
    this.operators = [];
  }
  calculate() {
    this.addends.push(this.addend);
    console.log(this.addends);

    for( let i = 0; i < this.operators.length; i++) {
      if(this.operators[i] === '+') {
        this.result = Number(this.addends[i]) + Number(this.addends[i+ 1]) 
      } else if(this.operators[i] === '-' ) {
        this.result = Number(this.addends[i]) - Number(this.addends[i + 1]) 
      } else if (this.operators[i] === '*' ) {
        this.result = Number(this.addends[i]) * Number(this.addends[i + 1]) 
      } else this.result = Number(this.addends[i]) / Number(this.addends[i + 1]) 
    }

    this.input = this.result;
  }
}
