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
import Immutable from 'immutable';

@CSSModules(styles,{allowMultiple: true})
export default class TodoTextInputView extends Component {
    constructor( props, context ) {
        super( props, context );
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        data: Immutable.fromJS({
            readOnly : true,
            error : false,
            value: this.props.value
        })
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
        const immData = this.state.data;
        const styleName = classNames('text',{'error':immData.get('error')},{'completed': this.props.isCompleted});

        return <input 
            styleName={styleName} 
            readOnly={immData.get('readOnly')} 
            onBlur={this.handleBlur}
            onDoubleClick={this.handleDoubleClick} 
            onChange={this.handleChange}
            value={immData.get('value')}/>
    }

    handleDoubleClick() {
        this.setState(({data}) => ({
            data: data.set('readOnly', false)
        }));
    }

    handleBlur(e) {
        const value = e.target.value.trim();
        if(value.length === 0 ) {
            this.setState(({data}) => ({
                data: data.set('error', true)
            }));
        }else{
            this.props.updateTodo(e.target.value.trim());
            this.setState(({data}) => ({
                data: data.set('readOnly',true)
                    .set('error',false)
            }));
        }
    }

    handleChange(e) {
        const newValue = e.target.value;
        this.setState(({data}) => ({
            data: data.set('value', newValue)
        }));
    }
}