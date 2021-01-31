
export class Command {
  public readonly title: string;
  public enabled: boolean = false;
  private onExecute = undefined;

  constructor(title: string, onExecute?, enabled?: boolean) {
    if (!title) { throw new Error('Action title must be defined') }
    this.title = title;
    this.enabled = enabled || this.enabled;
    this.onExecute = onExecute;
  }

  public execute() {
    console.log(`Command '${this.title}' executed!`);
    if (this.onExecute) {
      this.onExecute();
    }
  }

}
