import type { Command } from './command';


export class ViewModel {
  public readonly name: string;

  constructor(name: string) {
    if (!name) { throw new Error('View name must be defined!'); }
    this.name = name;
  }
}

export class CommandListViewModel extends ViewModel {
  private commands: Command[];

  constructor(name: string, commands: Command[]) {
    super(name);
    this.commands = commands || [];
  }
}

export class SetViewModel extends ViewModel {

  constructor(
    public readonly name: string,
    public readonly set,
  ) { super(name); };

  public setFinished() {
    console.log('set was finished');
  }
}
