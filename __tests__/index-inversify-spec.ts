import {
    injectable,
    inject,
    Container,
} from 'inversify';

import 'reflect-metadata';


@injectable()
class App {
    private masterService: IMasterService;
    private i: number;
    constructor(@inject('masterService') masterService: IMasterService) {
        this.i = 0;
        this.masterService = masterService;
        console.log('Constructed App');
    }

    public run(): string {
        this.i++;
        return `app-${this.i}-` + this.masterService.do();
    }
}

interface IMasterService {
    do(): string;
}

@injectable()
class MasterService implements IMasterService {

    private i: number;
    constructor() {
        this.i = 0;
        console.log('Construncted master service');
    }
    public do(): string {
        this.i++;
        return `master-${this.i}`;
    }
}

test('Use app with transient dependency', () => {

    const container = new Container();
    container.bind<App>('app').to(App);
    container.bind<IMasterService>('masterService').to(MasterService);

    let app: App;
    app = container.get<App>('app');
    expect(app.run()).toEqual('app-1-master-1');

    app = container.get<App>('app');
    expect(app.run()).toEqual('app-1-master-1');
});

test('Use app with singleton dependency', () => {

    const container = new Container();
    container.bind<App>('app').to(App);
    container.bind<IMasterService>('masterService').to(MasterService).inSingletonScope();

    let app: App;
    app = container.get<App>('app');
    expect(app.run()).toEqual('app-1-master-1');

    app = container.get<App>('app');
    expect(app.run()).toEqual('app-1-master-2');
});
