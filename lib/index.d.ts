export declare class App {
    private masterService;
    constructor(masterService: IMasterService);
    run(): string;
}
export interface IMasterService {
    do(): string;
}
export declare class MasterService implements IMasterService {
    do(): string;
}
