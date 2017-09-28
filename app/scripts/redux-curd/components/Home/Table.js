import { Table } from 'antd';
import { Component } from 'react';
const columns = [{
    title: '标题',
    dataIndex: 'title'
},{
    title: '描述',
    dataIndex: 'desc'
},{
    title: '发布日期',
    dataIndex: 'date'
}]

export default class ArticleTable extends Component{
    componentDidMount() {
        this.props.loadArticles();
    }

    render() {
        const { query, changeQuery, search, articleList } = this.props;
        return (
            <div className="table">
                <div className="search">
                    <input type="text" 
                        placeholder="请输入关键字" 
                        value={query}
                        onChange={changeQuery}/>
                    <button onClick={search}>搜索</button>
                </div>
                <Table columns={
                    columns.map(c => c.render ? ({
                        ...c, render: c.render.bind(this)}) 
                    : c)} dataSource={articleList}></Table>
            </div>
        )
    }
}

  