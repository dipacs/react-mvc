# react-mvc
MVC library for React and React-Native

This package is a very tiny framework to help react developers to use MVC with react and TypeScript.

## Concepts

### Model
The model is a bounch of classes which contains the data for the UI. DO NOT mix and match the model with the data. The data is what you get from your backend 
throught a web service. This is ALWAYS a different layer and it's the controller's responsibility to convert the data to model and backward.

### View
The view is responsible to render the UI based on the given model, and nothing more. No data conversion, no business logic. Just rendering based on the given model.

### Controller
The controller is the glue between the View and the business logic (or webservice). The controller is responsible to communicate with the webserver
and convert the returned data to a model object. The second responsibility of the controller is that it receives events from the View and handles it.

The controller has the role to decide when the linked View must render and with which model.

In react-mvc every controller is associated with a Scene (yeah that is the view) object.

# Getting started

I assume that you are familier with react and TypeScript so I skip the section of how to set-up and use a react typescript environment.
In this small getting started tutorial we are creating a very simple click counter as an example.

## Installing react-mvc

It's easy using the npm package manager

    npm install --save @eagerlogic/react-mvc
    

## Create a model object
For this example we need a very simple model which only stores the number of clicks. It looks like this:

/mainscene/MainModel.ts
```
export class MainModel {

    public clickCount: number = 0;

}
```

## Create the controller
You can create a controller by extending the AController class. The only generic parameter of AController class is the Model type.
In this case it's MainModel. Then you need to implement the createInitialModel method. This method is called when the Scene first rendered.
You can do whatever you want (call webservice, etc...) but at the end, you need to return the initial model, which will be used to render the initial state of the Scene. Most of the times it's just a load indivator.

You also need to implement your event handlers. These are just simple functions which called by the UI when something is happened, for example a button clicked.
In our case this function called: onButtonClicked. The full code of the controller is looks like this:

mainscene/MainController.ts
```
import {AController} from '@eagerlogic/react-mvc';
import { MainModel } from './MainModel';

export class MainController extends AController<MainModel> {

    public onButtonClicked() {
        this.model.clickCount = this.model.clickCount + 1;
        this.render(this.model);
    }
    
    protected createInitialModel(): MainModel {
        return new MainModel();
    }

}
```

## Implement the view
Every controller has a Scene object which is the view of this controller. You can implement your scene by extending the AScene class. The AScene class
has 3 generic parameter: The proptype, the model type, and the controller. You need to implement the createController method where you need to instantiate your controller.
You also need to implement the render method, to render the UI. In our example this looks like this:

mainscene/MainScene.tsx
```
import { MainModel } from "./MainModel";
import { AScene } from "@eagerlogic/react-mvc";
import { MainController } from "./MainController";
import * as React from 'react';

export class MainScene extends AScene<any, MainModel, MainController> {
    
    protected createControlller() {
        return new MainController();
    }    
    
    render() {
        return (
            <div>
                <button onClick={() => {this.controller.onButtonClicked();}}>
                    Click count: {this.model.clickCount}
                </button>
            </div>
        )
    }
    
}
```

## Render the scene
Most of the times you will use react-router or something like this to switch between scenes, but this time it's not needed. we just simply use the following code:

index.tsx
```
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MainScene } from './mainscene/MainScene';

ReactDOM.render(
    (<MainScene/>)
    , document.getElementById('root')
);
```


