import { IRenderer } from "./IRenderer";
export declare abstract class AController<$Model> {
    private _model;
    private _renderer;
    constructor();
    protected readonly model: $Model;
    protected render(model: $Model): void;
    __init__(renderer: IRenderer<$Model>): $Model;
    init(): void;
    protected abstract createInitialModel(): $Model;
}
