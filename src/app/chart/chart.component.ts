import { Component, OnInit } from '@angular/core';
import { Student } from '../../model/student';
import { User } from '../../model/user';
import { UserService } from '../user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../student/student.service';

declare let google:any

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  
  student: Student[];
  user: User[];
  isLoadingResults = true;

  constructor(
      private apiUser: UserService,
      private apiStudent: StudentService,
      private router: Router,
      private route: ActivatedRoute) {  }

  ngOnInit() {
    this.apiUser.getUsers()
    .subscribe(res => {
      this.user = res;
      this.isLoadingResults = false;
      google.load("visualization", "1", {packages:["corechart"]});
      google.charts.setOnLoadCallback(() => this.drawUser());
    }, err => {
      this.isLoadingResults = false;
    });
    this.apiStudent.getStudents()
      .subscribe(res => {
        this.student = res;
        google.charts.load('current', {packages: ['corechart', 'bar']});
        google.charts.setOnLoadCallback(() => this.drawStudent());
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
    
  }

  drawStudent() {

    let  a = [], b = [], prev;
    
    this.student.sort((a,b) => {
      let x = a.course.id; var y = b.course.id;
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    for ( let i = 0; i < this.student.length; i++ ) {
        if ( this.student[i].course.id != prev ) {
          console.log(this.student[i].course.id, prev, this.student[i].course.id==prev);
          b.push(1);
          a.push(this.student[i].course.name);
            
        } else {
            b[b.length-1]++;
        }
        
        prev = this.student[i].course.id;
    }
    for(let i = 0; i < a.length; i++){
      a[i] = [a[i], b[i]];
    }
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Numero de estudantes');
    data.addColumn('number', 'Curso');
    data.addRows(a);

    var options = {
      title:'Numero de estudantes por curso de perfil',
      chartArea: {width: '80%'},
      height: 300,
      hAxis: {
        title: 'Perfil',
        minValue: 0
      },
      vAxis: {
        title: 'Perfil'
      }
    };
    const pie_1_chart = new google.visualization.PieChart(document.getElementById('chart2'));
    pie_1_chart.draw(data, options);
  }

  drawUser() {
    let admin = this.user.filter(e => {return e.profile === "admin"});
    let guess = this.user.filter(e => {return e.profile === "guess"});

    const data = google.visualization.arrayToDataTable([
        ['Usuários', 'Usuários'],
        ['Administrador', admin.length],
        ['Visitante', guess.length],
    ]);
    

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
      { calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation" },
      ]);

      var options = {
        title: 'Numero de usuários por perfil',
        width: 570,
        height: 300,
        bar: { groupWidth: "85%" },
        legend: { position: 'bottom', alignment: 'center' },
        
      };

    const pie_1_chart = new google.visualization.BarChart(document.getElementById('chart1'));
    pie_1_chart.draw(view, options);
  }



}
