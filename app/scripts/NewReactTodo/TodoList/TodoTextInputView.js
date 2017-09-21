/*
 * Title: todo列表页
 * Author: MinterLee@hotmail.com
 * CreateDate: 2017-09-20
 * Description: todo内容展示，双击可编辑
 */

import { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './TodoTextInput.css';
import CSSModules from 'react-css-modules';

@CSSModules(styles,{allowMultiple: true})
export default class TodoTextInputView extends Component {
    constructor( props, context ) {
        super( props, context );
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        readOnly : true,
        error : false,
        value: this.props.value
    }

    static propTypes = {
        value: PropTypes.string.isRequired,
        updateTodo: PropTypes.func.isRequired,
        isCompleted: PropTypes.bool.isRequired
    }

    componentWillReciveProps(nextProps) {
        this.setState({value: nextProps.value});
    }

    render() {
        const {readOnly, error, value} = this.state;
        const styleName = classNames('text',{'error':error},{'completed': this.props.isCompleted});

        return <input 
            styleName={styleName} 
            readOnly={readOnly} 
            onBlur={this.handleBlur}
            onDoubleClick={this.handleDoubleClick} 
            onChange={this.handleChange}
            value={value}/>
    }

    handleDoubleClick() {
        this.setState({readOnly: false});
    }

    handleBlur(e) {
        const value = e.target.value.trim();
        if(value.length === 0 ) {
            this.setState({error:true});
        }else{
            this.props.updateTodo(e.target.value.trim());
            this.setState({readOnly: true});
        }
    }

    handleChange(e) {
        this.setState({value:e.target.value});
    }
}