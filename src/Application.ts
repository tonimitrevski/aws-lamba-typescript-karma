import {Building} from "./Application/Building";

export class Application {
    building:Building;

    constructor(building: Building) {
        this.building = building;
    }

    test() {
        return this.building.test2();
    }
}