import React from 'react';
import 'reflect-metadata';
import {injectable} from 'inversify';
import {container, Ninja} from './type';

@injectable()
export class Home extends React.Component<any, any> {
    private _ninja: Ninja;

    constructor(props: any) {
        super(props);
        this._ninja = container.get(Ninja);
    }

    render() {
        return <div>
            <p>
                Ninja sneak: {this._ninja.sneak()}
            </p>
            <p>
                Ninja fight: {this._ninja.fight()}
            </p>
        </div>
    }

}
