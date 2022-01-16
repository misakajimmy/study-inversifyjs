import React from 'react';
import 'reflect-metadata';
import {injectable} from 'inversify';

@injectable()
export class Home extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return <div>
            123
        </div>
    }

}
