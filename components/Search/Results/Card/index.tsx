import styles from './index.module.scss';

export interface CardProps {
}

export const Card: React.FC<CardProps>  = (props: CardProps) => {
  return (
    <div className="container">
      <a>
        <img src="" alt=""/>
      </a>
      <a>Nom du manga</a>
    </div>
  );
};

export default Card;
