import React from 'react';
import 'reflect-metadata';
import {injectable} from 'inversify';
import {ninja} from './type';

@injectable()
export class Home extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return <div>
            <p>
                Ninja sneak: {ninja.sneak()}
            </p>
            <p>
                Ninja fight: {ninja.fight()}
            </p>
        </div>
    }

}
