import { IonIcon } from '@ionic/react'
import { caretForwardOutline } from 'ionicons/icons';
import './Post.css'

export const Post  = ({link, img, title, description, date, category}:{link: string, img:string, title:string, description:string, date:string, category: number}) => {

    return (
        <>
        <a className="post"  href={link}>
            <div className='postImg'>
                <img src={img} alt="Foto del post"/>
            </div>
            <div className='postContent'>
                <h3 className='postTitle'>{title}</h3>
                <p className='postDescription'>{description}</p>   
            </div>
                <IonIcon icon={caretForwardOutline} style={{marginLeft: "2%"}}/>
        </a>
        </>
    )
}