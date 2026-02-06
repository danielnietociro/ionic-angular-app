import { Component, OnInit } from '@angular/core';
import { RemoteConfigService } from '../services/remote-config.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {

  newTask: string = '';
  tasks: { text: string; completed: boolean; editing: boolean }[] = [];
  featureEnabled: boolean = false;

  constructor(private remoteConfigService: RemoteConfigService) {}

  ngOnInit() {
    this.remoteConfigService.getFeatureFlag('enable_task_feature').subscribe(enabled => {
      this.featureEnabled = enabled;
    });
  }

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ text: this.newTask, completed: false, editing: false });
      this.newTask = '';
    }
  }

  toggleTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  editTask(index: number) {
    this.tasks[index].editing = !this.tasks[index].editing;
  }

  saveTask(index: number, newText: string) {
    if (newText.trim()) {
      this.tasks[index].text = newText.trim();
    }
    this.tasks[index].editing = false;
  }

}
