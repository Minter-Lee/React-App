import Preview from './Preview';
import {Component} from 'react';

export default class PreviewList extends Component {
    componentDidMount() {
        this.props.loadArticles();
    }

    render() {
        const {loading, error, articleList, history} = this.props;
        if(error) {
            return <p>error</p>
        }
        if(loading) {
            return <p>loading</p>
        }
        
        return articleList.map(item => (
            <Preview {...item} key={item.id} history={history}/>
        ))
    }
}
