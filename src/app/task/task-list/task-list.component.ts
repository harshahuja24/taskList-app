import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  searchParameter!:string

  
  search():any{
    // console.log(this.searchParameter)
    let details = this.task.filter((tasks)=>(tasks.title.toLowerCase()).includes(this.searchParameter.toLowerCase()))
    console.log(details)
    
  }
  isDanger = false

  toggle():void{
   this.isDanger = !this.isDanger
  }

    task   = [
      {
        "id": 1,
        "title": "Complete project proposal",
        "description": "Draft and finalize project proposal for client X",
        "due_date": "2024-05-15",
        "priority": "High",
        "status": "Pending",
        "assigned_to": "John Doe"
      },
      {
        "id": 2,
        "title": "Review marketing strategy",
        "description": "Meet with marketing team to review and update strategy",
        "due_date": "2024-05-10",
        "priority": "Medium",
        "status": "In Progress",
        "assigned_to": "Jane Smith"
      },
      {
        "id": 3,
        "title": "Prepare quarterly report",
        "description": "Compile data and create quarterly report for stakeholders",
        "due_date": "2024-05-30",
        "priority": "High",
        "status": "Not Started",
        "assigned_to": "Michael Johnson"
      },
      {
        "id": 4,
        "title": "Update website content",
        "description": "Add new blog posts and update product descriptions",
        "due_date": "2024-05-20",
        "priority": "Medium",
        "status": "In Progress",
        "assigned_to": "Emily Brown"
      },
      {
        "id": 5,
        "title": "Plan team building event",
        "description": "Organize a team building activity for the department",
        "due_date": "2024-06-05",
        "priority": "Low",
        "status": "Not Started",
        "assigned_to": "Alex Rodriguez"
      },
      {
        "id": 6,
        "title": "Review budget allocation",
        "description": "Assess current budget allocation and make adjustments",
        "due_date": "2024-05-25",
        "priority": "High",
        "status": "Pending",
        "assigned_to": "Sophia Martinez"
      },
      {
        "id": 7,
        "title": "Conduct customer survey",
        "description": "Create and distribute a customer satisfaction survey",
        "due_date": "2024-06-10",
        "priority": "Medium",
        "status": "Not Started",
        "assigned_to": "David Wilson"
      },
      {
        "id": 8,
        "title": "Update training materials",
        "description": "Revise training materials for new employee orientation",
        "due_date": "2024-05-30",
        "priority": "Medium",
        "status": "In Progress",
        "assigned_to": "Jessica Taylor"
      },
      {
        "id": 9,
        "title": "Attend industry conference",
        "description": "Register and attend the annual industry conference",
        "due_date": "2024-06-15",
        "priority": "Low",
        "status": "Pending",
        "assigned_to": "Ryan Clark"
      },
      {
        "id": 10,
        "title": "Update software licenses",
        "description": "Renew software licenses and update license agreements",
        "due_date": "2024-05-31",
        "priority": "High",
        "status": "In Progress",
        "assigned_to": "Olivia White"
      }
    ] 

    

}
