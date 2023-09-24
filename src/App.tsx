import React from "react";
import ReactDOM from "react-dom";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";

type ComponentName = keyof typeof componentMap;

const componentMap = {
  ComponentOne,
  ComponentTwo,
} as unknown;

function MainApp() {
  const componentsToRender: ComponentName[] = Object.keys(
    componentMap as Record<ComponentName, React.ComponentType>
  ) as ComponentName[];

  return (
    <>
      {componentsToRender.map((componentName) => (
        <ExternalComponentContainer
          key={componentName}
          componentName={componentName}
        />
      ))}
    </>
  );
}

interface ExternalComponentContainerProps {
  componentName: ComponentName;
}

function ExternalComponentContainer({
  componentName,
}: ExternalComponentContainerProps) {
  // Use type assertion to cast 'componentMap' to the expected type
  const componentMapTyped = componentMap as Record<
    ComponentName,
    React.ComponentType
  >;

  // Retrieve the component from the typed map
  const Component = componentMapTyped[componentName];

  const domElement = document.querySelector(
    (componentName as string).toLowerCase()
  );

  if (!Component) {
    console.error(`Component "${componentName}" does not exist.`);
    return null;
  }

  if (!domElement) {
    return null;
  }

  // Define a type for the attributes object
  type Attributes = {
    [key: string]: string;
  };

  // Retrieve all attributes from the HTML element
  const attributes: Attributes = {};
  for (let i = 0; i < domElement.attributes.length; i++) {
    const { name, value } = domElement.attributes[i];
    attributes[name] = value;
  }
  // Pass the attributes as props to the component
  return ReactDOM.createPortal(
    React.createElement(Component, attributes),
    domElement
  );
}

export default MainApp;
