import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { createForm } from 'redux-form-utils';

React.PropTypes = PropTypes;

@createForm({
  form :'article',
  fields: ['title', 'desc', 'date']
})
export default class ArticleModal extends Component {
  render() {
    const { title, desc, date } = this.props.fields;
    return (
      <Modal
        visible={this.props.visible}
        onCancel={this.props.hideModal}
        onOk={this.props.addArticle}
      >
        <div className="form">
          <div className="control-group">
            <label>标题</label>
            <input type="text" {...title} />
          </div>
          <div className="control-group">
            <label>描述</label>
            <textarea {...desc} />
          </div>
          <div className="control-group">
            <label>发布日期</label>
            <input type="date" {...date} />
          </div>
        </div>
      </Modal>
    );
  }
}
