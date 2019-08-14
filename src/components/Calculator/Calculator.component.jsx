import React from 'react';

import Buttons from '../Buttons/Buttons.component';
import Formula from '../Formula/Formula.component';
import Output from '../Output/Output.component';

import './Calculator.styles.scss';

const isOperator = /[x/+‑]/,
endsWithOperator = /[x+‑/]$/,
endsWithNegativeSign = /[x/+]‑$/;

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curValue: '0',
            preValue: '0',
            formula: '',
            curSign: 'pos'
        };
        this.maxDigit = this.maxDigit.bind(this);
        this.evaluate = this.evaluate.bind(this);
        this.getOperator = this.getOperator.bind(this);
        this.getNumbers = this.getNumbers.bind(this);
        this.getDecimal = this.getDecimal.bind(this);
        this.init = this.init.bind(this);
    }
    maxDigit() {
        this.setState({
          curValue: 'Max Digit Met',
          preValue: this.state.curValue,
          formula: ''
        });
        setTimeout(() => this.setState({ curValue: this.state.preValue }), 1000);
      }

    evaluate() {
         if (!this.state.curValue.includes(`Digit`) && !this.state.evaluated && !endsWithNegativeSign.test(this.state.formula)) {
           
            let exp = this.state.formula;
            while (endsWithOperator.test(exp)) {
                exp = exp.slice(0, -1);
            }
            exp = exp.replace(/x/g, `*`).replace(/-/g, '-');
            let ans = eval(exp);
            if (ans){
            this.setState({
                curValue: ans.toString(),
                formula: exp.replace(/\*/g, '⋅').replace(/-/g, '‑') + '=' + ans,
                preValue: ans,
                evaluated: true
            })};
        }
    }
    getOperator(e) {
      if (!this.state.curValue.includes('Digit')) {
        const value = e.target.value;
        const { formula, preValue, evaluated } = this.state;
        this.setState({ curValue: value, evaluated: false });
        if (evaluated) {
          this.setState({ formula: preValue + value });
        } else if (!endsWithOperator.test(formula)) {
          this.setState({
            prevVal: formula,
            formula: formula + value
          });
        } else if (!endsWithNegativeSign.test(formula)) {
          this.setState({
            formula: value + (endsWithNegativeSign.test(formula + value)
              ? formula : preValue) + value
          });
        } else if (value !== '‑') {
          this.setState({
            formula: preValue + value
          });
        }
      }
    }
      getNumbers(e) {
        if (!this.state.curValue.includes('Digit')) {
          const { curValue, formula, evaluated } = this.state;
          const value = e.target.value;
          this.setState({ evaluated: false });
          if (curValue.length > 12) {
            this.maxDigit();
          } else if (evaluated) {
            this.setState({
              curValue: value,
              formula: value !== '0' ? value : ''
            });
          } else {
            this.setState({
              curValue:
                curValue === '0' || isOperator.test(curValue)
                  ? value
                  : curValue + value,
              formula:
                curValue === '0' && value === '0'
                  ? formula
                  : (/([^.0-9]0)$/).test(formula)
                    ? formula.slice(0, -1) + value
                    : formula + value
            });
          }
        }
      }
      getDecimal() {
        if (this.state.evaluated === true) {
          this.setState({
            curValue: '0.',
            formula: '0.',
            evaluated: false
          });
        } else if (
          !this.state.curValue.includes('.') &&
          !this.state.curValue.includes('Limit')
        ) {
          this.setState({ evaluated: false });
          if (this.state.curValue.length > 21) {
            this.maxDigitWarning();
          } else if (
            endsWithOperator.test(this.state.formula) ||
            (this.state.curValue === '0' && this.state.formula === '')
          ) {
            this.setState({
              curValue: '0.',
              formula: this.state.formula + '0.'
            });
          } else {
            this.setState({
              curValue: this.state.formula.match(/(-?\d+\.?\d*)$/)[0] + '.',
              formula: this.state.formula + '.'
            });
          }
        }
      }
      init() {
          this.setState({
              curValue: '0',
              preValue: '0',
              formula: '',
              curSign: 'pos',
              evaluated: false
          })
      }
    
    render() {
        return (
        <div className="calculator">
            <div className="calc-frame">
                <div className="calc-result-frame">
                <Formula formula={this.state.formula.replace(/x/g, '⋅')} />
                <Output curValue={this.state.curValue} />
                </div>
                <Buttons 
                decimal={this.getDecimal}
                eval={this.evaluate}
                init={this.init}
                numbers={this.getNumbers}
                operators={this.getOperator}/>
            </div>
        </div>
        )
    }
}

export default Calculator;