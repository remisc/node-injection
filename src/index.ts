export class App {
  private masterService: IMasterService;
  constructor(masterService: IMasterService) {
    this.masterService = masterService;
  }

  public run(): string {
    return this.masterService.do();
  }
}

export interface IMasterService {
  do(): string;
}

export class MasterService implements IMasterService {
  public do(): string {
    return 'master';
  }
}
