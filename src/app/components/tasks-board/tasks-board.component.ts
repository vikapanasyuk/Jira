import { Component, OnInit } from '@angular/core';
import { TypeIcons, PriorityIcons, IProject, ITask, Priority, Type } from 'src/app/interfaces/project-tasks';
import { TasksStoreService } from '../../services/tasksStore/tasks-store.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-tasks-board',
  templateUrl: './tasks-board.component.html',
  styleUrls: ['./tasks-board.component.scss']
})
export class TasksBoardComponent implements OnInit {

  constructor(private tasksStore: TasksStoreService,
    public authService: AuthService) { }

  tasks: ITask[];
  iconsType: typeof TypeIcons = TypeIcons;
  iconsPriority: typeof PriorityIcons = PriorityIcons;
  types: typeof Type = Type;
  priorities: typeof Priority = Priority;

  ngOnInit(): void {
    console.log('logged', this.authService.isLoggedIn)
    this.tasks = this.tasksStore.getCurrentProjectTasks('Team 1');
  }

}
