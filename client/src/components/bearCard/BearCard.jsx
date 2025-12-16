import { Link } from 'react-router'

export default function BearCard({
    _id,
    title,
    summary,
    imageUrl,
}) {
    return (
        <article className="card">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{summary}</p>
            <Link to={`/bears/${_id}/details`} className="details-button">Details</Link>
        </article>
    )
}