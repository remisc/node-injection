import {
    AwilixContainer,
    createContainer,
    asClass,
} from 'awilix';

interface AppOptions {
    masterService: IMasterService;
}

class App {
    private masterService: IMasterService;
    private i: number;
    constructor({ masterService }: AppOptions) {
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
    close(): void;
}

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

    public close(): void {
        console.log('app close');
        throw new Error('close_failure');
    }
}

test('Use app with transient dependency', () => {

    const container = createContainer();
    container.register({
        masterService: asClass(MasterService),
        app: asClass(App),
    });

    let app: App;
    app = container.resolve<App>('app');
    expect(app.run()).toEqual('app-1-master-1');

    app = container.resolve<App>('app');
    expect(app.run()).toEqual('app-1-master-1');

});

test('Use app with singleton dependency', async () => {

    const container = createContainer();
    container.register({
        masterService: asClass(MasterService).disposer(_ => _.close() ).singleton(),
        app: asClass(App),
    });

    let app: App;
    app = container.resolve<App>('app');
    expect(app.run()).toEqual('app-1-master-1');

    app = container.resolve<App>('app');
    expect(app.run()).toEqual('app-1-master-2');

    await expect(container.dispose()).rejects.toThrow('close_failure');
});
