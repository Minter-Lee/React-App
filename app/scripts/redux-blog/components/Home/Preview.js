export default (props) => {

    const handleNavigate = (e) => {
        e.preventDefault();
        props.history.push(`/detail/${props.id}`);
    }
    return (
        <article>
            <h1><a href={`/#/detail/${props.id}`} onClick={handleNavigate}>{props.title}</a></h1>
            <span>{props.date}</span>
            <p>{props.desc}</p>
        </article>
    )
};