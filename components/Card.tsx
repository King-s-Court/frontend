import Image from 'next/image';

interface CardProps {
    image: string;
    title: string;
    onClick?: () => void;
}

const Card = (props: CardProps) => {

    return (
        <div onClick={props.onClick} className={'card'}>
            <div className={'card-container'}>
                {props.title && <div className={'subtitle card-title'}>{props.title}</div>}
                {props.image && <Image src={`/${props.image}`} alt={'image'} width={174} height={174}/>}
            </div>
        </div>
    );
};

export default Card;