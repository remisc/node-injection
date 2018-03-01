"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class App {
    constructor(masterService) {
        this.masterService = masterService;
    }
    run() {
        return this.masterService.do();
    }
}
exports.App = App;
class MasterService {
    do() {
        return 'master';
    }
}
exports.MasterService = MasterService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUVFLFlBQVksYUFBNkI7UUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUVNLEdBQUc7UUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0NBQ0Y7QUFURCxrQkFTQztBQU1EO0lBQ1MsRUFBRTtRQUNQLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBSkQsc0NBSUMifQ==