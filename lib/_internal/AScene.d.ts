import * as React from 'react';
import { AController } from "./AController";
import { IRenderer } from "./IRenderer";
export declare abstract class AScene<$Props, $Model, $Controller extends AController<$Model>> extends React.Component<$Props, SceneState<$Model>> implements IRenderer<$Model> {
    private _controller;
    private _model;
    constructor(props: $Props);
    protected get controller(): $Controller;
    protected get model(): $Model;
    renderScene(model: $Model): void;
    protected abstract createControlller(): $Controller;
    abstract render(): React.ReactNode;
}
export declare class SceneState<$Model> {
    version: number;
}
