import { IRenderer } from "./IRenderer";
export declare abstract class AController<$Model> {
    private _model;
    private _renderer;
    constructor();
    protected readonly model: $Model;
    protected render(model: $Model): void;
    init(renderer: IRenderer<$Model>): $Model;
    protected abstract createInitialModel(): $Model;
}
