import { Component } from 'react';
import { ControlAnchor } from "./base/constants";
import { Size } from './base/common';

export declare class Panorama extends Component<any> {
  /**
   * 控件的停靠位置
   */
  anchor: ControlAnchor;
  /**
   * 控件的水平偏移值
   */
  offset: Size;
  /**
   * 获取当前实例
   */
  getInstance: Function;
}
