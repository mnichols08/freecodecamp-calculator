import React from 'react';
const  clearStyle = { background: '#ac3939' },
  operatorStyle = { background: '#666666' },
  equalsStyle = {
    background: '#004466',
    position: 'absolute',
    height: 130,
    bottom: 5
  };
class Buttons extends React.Component {
    render() {
        return (
        <>
        <div className="flex-row">
            <div className="calc-logo">mikeyNichols.dev</div>
            <button 
            className='calc-on'
            id='clear'
            onClick={this.props.init}
            value='AC'
            >ON</button>
        </div>

        <div className="flex-row">
            <button className="calc-btn" id='seven' onClick={this.props.numbers} value='7'>7</button>
            <button className="calc-btn" id='eight' onClick={this.props.numbers} value='8'>8</button>
            <button className="calc-btn" id='nine' onClick={this.props.numbers} value='9'>9</button>
            <button 
            className='calc-btn'
            id='multiply'
            onClick={this.props.operators}
            value="X"
            >X</button>
        </div>
        <div className="flex-row">
            <button className="calc-btn" id='four' onClick={this.props.numbers} value='4'>4</button>
            <button className="calc-btn" id='five' onClick={this.props.numbers} value='5'>5</button>
            <button className="calc-btn" id='six' onClick={this.props.numbers} value='6'>6</button>
            <button 
            className='calc-btn'
            id='subtract'
            onClick={this.props.operators}
            value='‑'
            >-</button>
        </div>
        <div className="flex-row">
            <button className="calc-btn" id='one' onClick={this.props.numbers} value='1'>1</button>
            <button className="calc-btn" id='two' onClick={this.props.numbers} value='2'>2</button>
            <button className="calc-btn" id='three' onClick={this.props.numbers} value='3'>3</button>
            <button 
            className='calc-btn'
            id='add'
            onClick={this.props.operators}
            value='+'
            >+</button>
        </div>
        <div className="flex-row">
            <button 
            className='calc-btn flex-double'
            id='zero'
            onClick={this.props.numbers}
            value='0'            
            >0</button>
            <button className="calc-btn" id='decimal' onClick={this.props.decimal} value='.'>.</button>
            <button 
            className="calc-btn"
            id='divide'
            onClick={this.props.operators}
            value="/"
            >/</button>
        </div>
        
        <div className="flex-row">
        <button 
        className='calc-btn calc-enter'
        id='equals'
        onClick={this.props.eval}
        value='='
        >ENTER</button>
        </div>
        </>
        )
    }
}
export default Buttons;