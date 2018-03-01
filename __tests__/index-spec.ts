import * as my from '../src/index';

test('Use app', () => {
  let masterService = new my.MasterService();
  let app = new my.App(masterService);
  expect(app.run()).toEqual('master');
});
