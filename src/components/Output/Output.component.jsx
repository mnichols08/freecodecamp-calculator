import React from 'react';


class Output extends React.Component {
    render() {
      return (
        <div className='calc-result-input' id='display'>
          {this.props.curValue}
        </div>
      );
    }
  }

export default Output