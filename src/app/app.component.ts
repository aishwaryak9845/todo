import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



export class todos{
  constructor(
    public userId:string,
     public id:number ,
     public title:string, 
     public completed:string ){}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  todos! : todos[];
 
 
  constructor(private http:HttpClient) {}
 
  ngOnInit():void {
    this.getTodos();
  }
    

     getTodos(){
     
      this.http.get<any> ('https://jsonplaceholder.typicode.com/todos').subscribe(
        response => {
          console.log(response);
          this.todos =response;
        }
      );
     
   
    
   }
   
}

  