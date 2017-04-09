/* @flow */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { generator } from 'uigradients';

const Gradient = styled.div`
  ${generator({ gradient: 'mango_pulp' })}
  display: block;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

type DefaultProps = void;
type Props = {
  children: React<*>
};
type State = {};

class HeaderContainer extends React.Component<DefaultProps, Props, State> {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <Gradient>
        {this.props.children}
      </Gradient>
    );
  }
}

export default HeaderContainer;
