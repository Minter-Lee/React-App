import Nav from './Nav';

export default (props) => (
    <div>
        <div><Nav/></div>
        <div>{props.children}</div>
    </div>
)