import { AScene } from "./AScene";
import { IRenderer } from "./IRenderer";


export abstract class AController<$Model> {

    private _model: $Model;
    private _renderer: IRenderer<$Model>;

    constructor() {
    }

    protected get model() {
        return this._model;
    }

    protected render(model: $Model) {
        this._model = model;
        this._renderer.renderScene(model);
    }

    public __init__(renderer: IRenderer<$Model>): $Model {
        if (renderer == null) {
            throw new Error('The renderer parameter can not be null!');
        }

        this._renderer = renderer;
        this._model = this.createInitialModel();
        window.setTimeout(() => {this.init()}, 0)
        return this._model;
    }

    public init() {

    }

    protected abstract createInitialModel(): $Model;

}