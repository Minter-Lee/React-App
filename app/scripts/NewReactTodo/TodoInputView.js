/*
 * Title: InputView
 * Author: MinterLee@hotmail.com
 * CreateDate: 2016-09-19
 * Description: ...
 */

import {Component } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoInput.css';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';


// 加入CSSModules高阶组件，方便使用styles。注意css文件中class
// 的名称不是最后的名称（webpack中由CSSMoudels重新命名了）
// 所以这里使用styleName调用
@CSSModules(styles, {allowMultiple: true})
export default class TodoInputView extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    state = {
        inputValue : '',
        showError: false,
        errorMsg : '请输入正确的Todo!'
    }

    handleChange(e) {
        this.setState({inputValue: e.target.value});
    }

    handleSave(e) {
        const inputValue = e.target.value.trim();
        if (e.which === 13) {
            if (inputValue.length === 0) {
                this.setState({showError: true});
            }else{
                this.props.addTodo(inputValue);
                this.setState({
                    inputValue : '',
                    showError: false
                });
            }
        }
    }

    render(){
        const { inputValue, showError, errorMsg } = this.state; 
        // 直接放入结构中判断，会造成此dom在diff时总是与原来不等，
        // 因为每次都是计算出来的，结果相同，内存指向也不同，所以提前计算好
        const errorMsgClass = classNames({'error': true, 'displayBlock': showError});
        return <div>
            <input 
                type = 'text'
                autoFocus = {true}
                value = {inputValue}
                styleName = { 'inputOption' }
                placeholder = 'please input todos'
                onChange = { this.handleChange }
                onKeyDown = { this.handleSave }/>
            <div styleName = {errorMsgClass} > { errorMsg }</div>
        </div>
    }
}