import React from 'react';
import { observer } from 'mobx-react';

@observer
class Train extends React.Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <div className="train-container" style={styles.trainContainer} >
        <img src="train.png" alt="should be a train"/>
      </div>
    )
  }
};

const styles = {
  trainContainer: {
    width: '100%',
    height: '400px'
  }
};
export default Train;
export { Train };