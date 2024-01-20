export enum TaskStatus {
  waiting = "waiting",
  running = "running",
  done = "done",
}

export type TaskModel = {
  id: number;
  title: string;
  status: TaskStatus;
  created_at: Date;
  updated_at: Date;
};
