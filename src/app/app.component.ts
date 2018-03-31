import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  key = '41e9d8e015a077b664b1b77d2e50476d';
  marvels:any = [];
  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
  }

  search(){
    let that = this;
    this.http.get('https://gateway.marvel.com/v1/public/characters?apikey=' + this.key).subscribe(data => {
      that.marvels = data.data.results;
    });
  }

  // search(){
  //   let that = this;
  //   this.http.get('https://random.dog/doggos').subscribe(data => {
  //     console.log(data);
  //     that.marvels = data;
  //   });
  // }

  getSuperHeros(id){
    let that = this;
    console.log(id);
    this.http.get(`https://gateway.marvel.com/v1/public/characters/${id}?apikey=${this.key}`).subscribe(data => {
      that.marvels = data.data.results;
    });
  }

}
