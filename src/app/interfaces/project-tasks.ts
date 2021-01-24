export interface IProject {
  id: string;
  project: string;
  tasks: ITask[];
}

export interface ITask {
  id: string;
  name: string;
  description: string
  createBy: string;
  assignee: string;
  type: string;
  priority: string;
}

export enum Type {
  story,
  task,
  bug,
  epic,
  subtask,
}

export enum Priority {
  major,
  blocker,
  minor,
  trivial,
  critical,
}

export enum TypeIcons {
  story = 'bookmark',
  task = 'done',
  bug = 'fiber_manual_record',
  epic = 'grade',
  subtask = 'layers',
}

export enum PriorityIcons {
  major = 'expand_less',
  blocker = 'remove_circle',
  minor = 'expand_more',
  trivial = 'radio_button_unchecked',
  critical = 'label_important',
}

// trip_origin
