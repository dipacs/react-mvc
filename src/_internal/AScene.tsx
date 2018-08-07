import * as React from 'react';
import { AController } from "./AController";
import { IRenderer } from "./IRenderer";


export abstract class AScene<$Props, $Model, $Controller extends AController<$Model>> 
        extends React.Component<$Props, SceneState<$Model>> implements IRenderer<$Model> {

    private _controller: $Controller;
    private _model: $Model;

    constructor(props: $Props) {
        super(props);
        this._controller = this.createControlller();
        this._model = this._controller.init(this);
        this.state = {version: 0};
    }

    protected get controller() {
        return this._controller;
    }

    protected get model() {
        return this._model;
    }

    public renderScene(model: $Model) {
        this._model = model;
        this.setState({version: this.state.version + 1});
    }

    protected abstract createControlller(): $Controller;

    public abstract render(): React.ReactNode;

}

export class SceneState<$Model> {
    public version: number;
}