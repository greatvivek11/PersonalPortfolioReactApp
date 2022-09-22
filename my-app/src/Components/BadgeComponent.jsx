import Image from 'react-bootstrap/Image';

export const BadgeComponent = ({link,tag,img}) => {
    return (
        <a href={link} rel="noopener" target="_blank">
            <Image className="badgeImage" src={img} height="2rem" width="2rem" alt={tag} />
        </a>
    )
}
