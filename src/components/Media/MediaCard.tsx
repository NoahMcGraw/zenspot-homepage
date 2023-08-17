interface MediaCardProps {
  id: string;
  className?: string;
  src: string;
}

const MediaCard = ({ id, className, src }: MediaCardProps) => {
  return (
    <div id={id} className={`media-card ${className}`}>
      <img className="media-card__img" src={src} alt="media card" />
    </div>
  );
};

export default MediaCard;
