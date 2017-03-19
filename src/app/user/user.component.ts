import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent{
 

  result=[];
  private languages=[
    {
      "name":"Angular 2",
      "path":"../images/angular2.jpg",
      "desc":"Angular is a framework for building client applications in HTML and either JavaScript or a language like TypeScript that compiles to JavaScript.The framework consists of several libraries, some of them core and some optional."
    },
    {
      "name":".NET",
      "path":"../images/net.jpg",
      "desc": "A Microsoft operating system platform that incorporates applications, a suite of tools and services and a change in the infrastructure of the company's Web strategy. The .NET Framework supports building and running of next gen of applications and XML Web services."
    },
    {
      "name":"JAVA",
      "path":"../images/java.jpg",
      "desc":"Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible."
    },
    {
      "name":"Python",
      "path":"../images/python.jpg",
      "desc":"An interpreted language, Python has a design philosophy which emphasizes code readability (notably using whitespace indentation to delimit code blocks rather than curly braces or keywords), and a syntax which allows programmers to express concepts in fewer lines of code than possible in languages such as C++ or Java."
      
    },
    

  ];
 
  //@Output() parentOut: EventEmitter<any> = new EventEmitter();
  showDetails(value){
      // this.parentOut= value;
      // this.parentOut.emit();
      this.result=value;
  }

}
