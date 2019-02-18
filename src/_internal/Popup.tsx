import * as React from 'react';

export class Popup extends React.Component<PopupProps, any> {

    constructor(props: PopupProps) {
        super(props);

        this.onFadeClicked = this.onFadeClicked.bind(this);
    }

    public onFadeClicked() {
        if (this.props.onFadeClicked != null) {
            this.props.onFadeClicked();
        }
    }

    public render() {
        return (
            <div style={this.createFadeStyle()} onClick={this.onFadeClicked}>
                <div style={{ display: "table", width: "100%", minHeight: "100%", height: '100%' }}>

                    <div style={{ display: "table-row", height: "40px" }}>
                        <div style={{ display: "table-cell" }}>

                        </div>
                    </div>

                    <div style={{ display: "table-row" }}>
                        <div style={{ display: "table-cell", textAlign: "center", verticalAlign: "middle" }}>
                            <div style={{ display: "inline-block" }}>
                                <div style={{ display: 'inline-block', textAlign: 'left' }} onClick={(e) => {e.stopPropagation();}}>
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "table-row", height: "40px" }}>
                        <div style={{ display: "table-cell" }}>

                        </div>
                    </div>

                </div>
            </div>
        );
    }

    private createFadeStyle(): React.CSSProperties {
        return {
            position: "fixed",
            backgroundColor: this.props.fadeColor == null ? "rgba(0,0,0, 0.7)" : this.props.fadeColor,
            overflow: "auto",
            left: "0px",
            top: "0px",
            right: "0px",
            bottom: "0px",
            zIndex: this.props.zIndex ? this.props.zIndex : 10000,
        };
    }

}

export class PopupProps {
    public fadeColor?: string;
    public zIndex?: number;
    public onFadeClicked?: () => void;
}