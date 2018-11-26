import * as React from 'react';
import {Effect} from '@shopify/react-effect';
import {Consumer} from '../context';

type Props = React.HTMLProps<HTMLLinkElement>;

export const EXTRACT_ID = Symbol('html');

export default class Link extends React.PureComponent<Props> {
  private removeLink?: () => void;

  componentWillUnmount() {
    if (this.removeLink) {
      this.removeLink();
    }
  }

  render() {
    return (
      <Consumer>
        {(manager) => (
          <Effect
            key={JSON.stringify(this.props)}
            kind={EXTRACT_ID}
            perform={() => {
              if (this.removeLink) {
                this.removeLink();
              }

              this.removeLink = manager.addLink(this.props);
            }}
          />
        )}
      </Consumer>
    );
  }
}
