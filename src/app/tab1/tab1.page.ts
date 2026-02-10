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
  tasks: { id: number; text: string; completed: boolean; editing: boolean }[] = [];
  featureEnabled: boolean = false;

  constructor(private remoteConfigService: RemoteConfigService) {}

  ngOnInit() {
    this.remoteConfigService.getFeatureFlag('enable_task_feature').subscribe(enabled => {
      this.featureEnabled = enabled;
    });
  }

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ id: Date.now(), text: this.newTask, completed: false, editing: false });
      this.newTask = '';
    }
  }

  toggleTask(task: { id: number; text: string; completed: boolean; editing: boolean }) {
    task.completed = !task.completed;
  }

  deleteTask(task: { id: number; text: string; completed: boolean; editing: boolean }) {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  editTask(task: { id: number; text: string; completed: boolean; editing: boolean }) {
    task.editing = !task.editing;
  }

  saveTask(task: { id: number; text: string; completed: boolean; editing: boolean }, newText: string) {
    if (newText.trim()) {
      task.text = newText.trim();
    }
    task.editing = false;
  }

  trackByFn(index: number, item: { id: number; text: string; completed: boolean; editing: boolean }): number {
    return item.id;
  }

}
