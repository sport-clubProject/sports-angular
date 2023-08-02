import { Component, OnInit } from '@angular/core';
import { AdminRepository } from '../model/adminrepository.component';
import { BookingDetails } from '../model/Bookingdetails.model';
import { Chart, registerables } from 'chart.js';
import { AdminDatasource } from '../model/restdatasource.component';
Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bookingdetails:BookingDetails[]=[];
  bookingspermonth:number[]=[];
  search:string = "";
  constructor(public repo: AdminRepository,public datasource:AdminDatasource) {
     this.bookingdetails=this.repo.bookingdetails

     console.log(this.repo.bookingspermonth)
    datasource.getbookingdetails().subscribe(data=>{
      console.log(data)
      this.bookingdetails=data;
      console.log(this.bookingdetails)
   })
  }

  get bookingsper(){
    this.bookingspermonth=this.repo.bookingspermonth
     return this.bookingspermonth
  }


  //  get details():BookingDetails[]{
  //   return this.bookingdetails.filter( d => d.username?.toLowerCase().match(this.search.toLowerCase()))
  //  }



  ngOnInit(): void {

    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Aprl', 'May', 'June','July','Aug','Sep','Oct','Nov','Dec'],
          datasets: [{
              label: 'No of bookings',
              data:this.bookingsper,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }

 get  getBookings() {
    for (let index = 0; index < this.repo.bookingdetails.length; index++) {
      var userid=this.bookingdetails[index].userId
      console.log(this.repo.userdetails)
      var username=this.repo.userdetails.find(e=>e.userId==userid)?.userName
      var payment=this.repo.payments.find(e=>e.userId==userid)
      console.log(username)
      this.bookingdetails[index].username=username
      this.bookingdetails[index].price=payment?.amount
      this.bookingdetails[index].status=payment?.status
      this.bookingdetails[index].paymentMode=payment?.paymentMode

    }
    return this.bookingdetails.filter( d => d.username?.toLowerCase().match(this.search.toLowerCase()))


  }
  public barChartOptions = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      }
    }
  };

  public barChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartPlugins = [];

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Football' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Basketball' },
    { data: [40, 35, 56, 80, 76, 43, 65], label: 'Tennis' },
    // Add more datasets for other sports as needed
  ];





}



