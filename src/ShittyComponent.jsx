import { Card, CardText, CardTitle } from 'material-ui';

import React from 'react';
import { state } from './pages/State';

class ShittyComponent extends React.Component {
  render() {
		const style = this.props.style || {};

    return (
      <Card>
       <CardTitle title="Number of people on carriage" subtitle="" />
        <CardText>
          {state.countList[this.props.index]}
        </CardText>
		
			</Card>
    );
  }
}

export default ShittyComponent;
export { ShittyComponent };
