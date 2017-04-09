/* @flow */

import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import { config } from 'config';
import {
  Wrapper,
  Subtitle,
  From,
  AppIcon,
  AppTitle,
  AppIconContainer,
  AppInfoContainer
} from '../components/styled/';
import HeaderContainer from '../components/styled/HeaderContainer';

export default class Index extends React.Component {
  render() {
    return (
      <Wrapper>
        <Helmet
          title={config.siteTitle}
          meta={[{ name: 'description', content: 'sample' }]}
        />
        <HeaderContainer>
          <AppInfoContainer>
            <AppIconContainer>
              <AppIcon />
              <AppTitle>
                App
              </AppTitle>
            </AppIconContainer>
            <Subtitle>
              Welcome to my awesome App
            </Subtitle>
          </AppInfoContainer>
        </HeaderContainer>
        <From>
          <span>
            Google Play and the Google Play logo are trademarks of Google Inc.
          </span>
          {' '}
          From
          {' '}
          <a href="https://twitter.com/apsl_web" target="_blank">@apsl_web</a>
          {' '}
          with ❤️
        </From>
      </Wrapper>
    );
  }
}
