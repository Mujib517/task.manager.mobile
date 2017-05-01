import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    templateUrl: 'task-list.html'
})

export class TaskListPage {

    tasks: Array<any>;
    sub:any

    //tasks:any[]

    constructor(private http: Http) { }

    ngOnInit() {
     this.sub=   this.http.get('http://localhost:4000/tasks')
            .map(response => response.json())
            .subscribe(response => this.tasks = response);
    }

    ngOnChanges(){
        //input has changed
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }
}