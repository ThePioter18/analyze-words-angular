import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/catch';
import { catchError } from 'rxjs/operators';
import { Sentences } from './data/data-base';
import { AnalyzeSentence } from './data/models';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: []
})

export class AppComponent implements OnInit  {
  name = 'ngAnalyze';

  textbox = '';
  numbers: number[] = [1,2,3,4,5,6,7,8,9,10];
  selectedNum: number;
  colors: string[] = ['red','green','blue'];
  selectedColor: string;

  sentences: AnalyzeSentence[] = Sentences;

  endText: string;
  findWord: string;
  colorRed = 'red';
  htmlToAdd: string;

  constructor(){
  }
  ngOnInit() {
  }

  addData(){
    const sentence = {
        sentence: this.textbox,  
        numberWord: this.selectedNum, 
        colorWord: this.selectedColor
      }

      //czyszczenie pól
      this.textbox = '',  
      this.selectedNum = 0, 
      this.selectedColor = ''

    this.sentences.push(sentence);
  }

  setColor(value: string) {
    return {
      color: this.colorRed,
    };
  }

  Analyze(sentence: AnalyzeSentence){
        
      let str = sentence.sentence;// var str = "Ala ma kota.";
    
      let splitted = str.split(" ", sentence.numberWord); 

      this.findWord = splitted[sentence.numberWord-1]; 
        
      if (str.search(this.findWord) == -1 ) { 
        console.log("Nie można znaleźć danego słowa" ); 
      } else { 

        this.endText = str.replace(this.findWord, this.findWord.fontcolor(sentence.colorWord));
        document.getElementById("color").innerHTML = this.endText;

      } 

  }
  
}
