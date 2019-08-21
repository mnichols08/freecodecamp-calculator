import React from 'react';
class Buttons extends React.Component {
    constructor(props){
        super(props);
        this.listenToKeys = this.listenToKeys.bind(this);
      }
      listenToKeys(e){
        switch(e.keyCode) {
            case 46:
                this.props.init();
            break;

            case 13:
                setTimeout(this.props.eval(), 1000);
            break;

            case 110:
                this.props.decimal();
            break;

            case 111:
                this.props.operators({target: {value: '/'}});
            break;

            case 106:
                this.props.operators({target: {value: 'x'}});
            break;

            case 109:
                this.props.operators({target: {value: '-'}});
            break;

            case 107:
                this.props.operators({target: {value: '+'}});
            break;

            case 96:
                this.props.numbers({target: {value: '0'}});
            break;

            case 97:
                this.props.numbers({target: {value: '1'}});
            break;

            case 98:
                this.props.numbers({target: {value: '2'}});
            break;

            case 99:
                this.props.numbers({target: {value: '3'}});
            break;

            case 100:
                this.props.numbers({target: {value: '4'}});
            break;

            case 101:
                this.props.numbers({target: {value: '5'}});
            break;

            case 102:
                this.props.numbers({target: {value: '6'}});
            break;

            case 103:
                this.props.numbers({target: {value: '7'}});
            break;

            case 104:
                this.props.numbers({target: {value: '8'}});
            break;

            case 105:
                this.props.numbers({target: {value: '9'}});
            break;
           
            default:
        }

      }
      componentDidMount(){
        document.addEventListener("keydown", this.listenToKeys, false);
      }
      componentWillUnmount(){
        document.removeEventListener("keydown", this.listenToKeys, false);
      }

    render() {
        return (
        <>
        <div className="flex-row">
            <button 
            className='calc-on'
            id='clear'
            onClick={this.props.init}
            >CLEAR</button>
            <div className="calc-logo"><a href="https://mikeynichols.dev" target="_blank" rel="noopener noreferrer" >mikeyNichols.dev</a></div>
        </div>

        <div className="flex-row">
            <button className="calc-btn" id='seven' onClick={this.props.numbers} value='7'>7</button>
            <button className="calc-btn" id='eight' onClick={this.props.numbers} value='8'>8</button>
            <button className="calc-btn" id='nine' onClick={this.props.numbers} value='9'>9</button>
            <button 
            className='calc-btn'
            id='multiply'
            onClick={this.props.operators}
            value="x"
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
            value='-'
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
        >=</button>
        </div>
        </>
        )
    }
}
export default Buttons;