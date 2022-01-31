import * as inversify from 'inversify';
import 'reflect-metadata';

const TYPES = {
    // 忍者
    Ninja: 'Ninja',
    // 武士刀
    Katana: 'Katana',
    // 手里剑
    Shuriken: 'Shuriken'
}

class Katana {
    hit() {
        return 'cut!';
    }
}

class Shuriken {
    throw() {
        return 'hit!';
    }
}

class Ninja {
    private _katana: Katana;
    private _shuriken: Shuriken;

    constructor(katana: Katana, shuriken: Shuriken) {
        this._katana = katana;
        this._shuriken = shuriken;
    }

    fight() {
        return this._katana.hit();
    }

    sneak() {
        return this._shuriken.throw();
    }
}

// 声明可被注入以及其依赖项
inversify.decorate(inversify.injectable(), Katana);
inversify.decorate(inversify.injectable(), Shuriken);
inversify.decorate(inversify.injectable(), Ninja);
inversify.decorate(inversify.inject(TYPES.Katana), Ninja, 0);
inversify.decorate(inversify.inject(TYPES.Shuriken), Ninja, 1);

// 声明绑定关系
const container = new inversify.Container();
container.bind(TYPES.Ninja).to(Ninja);
container.bind(TYPES.Katana).to(Katana);
container.bind(TYPES.Shuriken).to(Shuriken);

export const ninja = container.get(TYPES.Ninja) as Ninja;
