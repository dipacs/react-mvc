import { render } from "react-dom";

export interface IRenderer<$Model> {

    renderScene(model: $Model): void;

}