/// <reference types="react" />
import * as React from 'react';
export declare class Popup extends React.Component<PopupProps, any> {
    constructor(props: PopupProps);
    onFadeClicked(): void;
    render(): JSX.Element;
    private createFadeStyle();
}
export declare class PopupProps {
    fadeColor?: string;
    onFadeClicked?: () => void;
}
