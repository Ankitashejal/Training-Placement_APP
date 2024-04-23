import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
openTab1() {
  this.router.navigate(['/tabs/tab1']);
}
  public data: {name: string, location: string, salary: string, type: string, height: string, desc: string, logo: string, hq: string}[] = [];
  constructor(private router:Router) {
    this.data = [
      {
        name: "Google",
        location: "Banglore", salary: "8Lpa to 10Lpa", type: "internship", height: "0px",
        desc: "Google LLC is an American multinational technology company focusing on online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, artificial intelligence,[9] and consumer electronics",
        logo: 'google.png', hq: "google.png"
      },
      {
        name: "",
        location: "London", salary: "15Lpa to 12Lpa", type: "Full Time", height: "560px",
        desc: "Nomura Group is a Japanese financial services group servicing the needs of individuals, institutions, corporates and governments by providing products and services in retail and wholesale banking and asset management. Nomura Bank International is focused on supporting global wholesale business, mainly global markets division of the Nomura Group.",
        logo: 'nomura.png', hq: "nomura.jpg"
      },
      {
        name: "",
        location: "London", salary: "5Lpa to 6Lpa", type: "Full Time/Internship", height: "0px",
        desc: "Nomura Group is a Japanese financial services group servicing the needs of individuals, institutions, corporates and governments by providing products and services in retail and wholesale banking and asset management. Nomura Bank International is focused on supporting global wholesale business, mainly global markets division of the Nomura Group.",
        logo: 'deloitte.png', hq: "deloitte.jpg"
      }
    ]  


  }
}
