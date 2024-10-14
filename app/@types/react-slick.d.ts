declare module "react-slick" {
    import React from "react";
  
    interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      arrows?: boolean;
      nextArrow?: React.ReactNode;
      prevArrow?: React.ReactNode;
      afterChange?: (current: number) => void;
    }
  
    export default class Slider extends React.Component<Settings> {}
  }
  