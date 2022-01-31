import 'reflect-metadata';
import {injectable, Container} from 'inversify';

@injectable()
export class Katana {
    public hit() {
        return "cut!";
    }
}

@injectable()
export class Shuriken {
    public throw() {
        return "hit!";
    }
}

@injectable()
export class Ninja implements Ninja {

    private _katana: Katana;
    private _shuriken: Shuriken;

    public constructor(katana: Katana, shuriken: Shuriken) {
        this._katana = katana;
        this._shuriken = shuriken;
    }

    public fight() { return this._katana.hit(); };
    public sneak() { return this._shuriken.throw(); };

}

export const container = new Container();
container.bind<Ninja>(Ninja).toSelf();
container.bind<Katana>(Katana).toSelf();
container.bind<Shuriken>(Shuriken).toSelf();
