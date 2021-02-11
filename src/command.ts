
export class Command {
  public readonly title: string;
  public enabled: boolean = false;
  private onExecute = undefined;

  constructor(title: string, onExecute?, enabled?: boolean) {
    if (!title) { throw new Error('Action title must be defined') }
    this.title = title;
    this.enabled = enabled ?? true;
    this.onExecute = onExecute;
  }

  public execute() {
    if (this.onExecute && this.enabled) {
      console.log(`Command '${this.title}' executed!`);
      this.onExecute();
    }
  }

}
