import React from 'react';
import { Component, ReactNode } from 'react';

interface SidebarProps {
    children?: ReactNode;
}

interface SidebarState {
  isOpen: boolean;
}

export class Sidebar extends Component<SidebarProps, SidebarState> {

  static instance:  Sidebar | null = null;

  constructor(props: SidebarProps) {
    super(props);
    this.state = {
      isOpen: false,
    };
    Sidebar.instance = this;
  }

  static onOpen = () => {
    if(!Sidebar.instance) return;
    Sidebar.instance.setState(() => ({
      isOpen: true,
    }));
  };


  static toggleSidebar = () => {
    if(!Sidebar.instance) return;
    Sidebar.instance.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  onClose = () => {
    if(!Sidebar.instance) return;
    Sidebar.instance.setState(() => ({
        isOpen: false,
      }));
  }

  render(){

    const { isOpen } = this.state

    return (
        <>
          {isOpen &&
            <div className={'sidebar-block'} onClick={this.onClose}>Sidebar</div>
          }
          <div
            className={`${'sidebar-container'} ${isOpen ? 'sidebar-show' : 'sidebar-hide'}`}
            >
            <div className={'sidebar-header'}>
              <button className={'sidebar-close'} onClick={this.onClose}>
                X
              </button>
            </div>
            <div>
              {this.props.children}
            </div>
          </div>
        </>
      )
  }
}

export default Sidebar

type SidebarButtonType = {
  active?: boolean;
} & React.ComponentProps<"button">

export const SidebarButton = (props: SidebarButtonType) => {
  const {
    active,
    children,
    ...cleanProps
  } = props

  return (
    <button
        {...cleanProps}
      className={`${'sidebar-button'} ${cleanProps.className ?? ""} ${active ? 'sidebar-button-active' : 'sidebar-button-inactive'}`}
    >
      {children}
    </button>
  )
}
