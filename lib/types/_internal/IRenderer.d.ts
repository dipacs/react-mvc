export interface IRenderer<$Model> {
    renderScene(model: $Model): void;
}
