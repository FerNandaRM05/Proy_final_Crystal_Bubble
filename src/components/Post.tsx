import './Post.css'

export const Post  = ({link, img, title, description, date}:{link: string, img:string, title:string, description:string, date:string}) => {

    return (
        <>
        <a className="post"  href={link}>
            <div className='postImg'>
                <img src={img} />
            </div>
            <div className='postContent'>
                <h3 className='postTitle'>{title}</h3>
                <p className='postDescription'>{description}</p>
                <p>{date}</p>
            </div>
        </a>
        </>
    )
}