interface SlideLogoHeaderProps {
  id: string;
  className?: string;
}

const SlideLogoHeader = ({ id, className }: SlideLogoHeaderProps) => {
  return (
    <div id={id} className={`slide__header ${className}`}>
      <div className="slide__header__logo">
        <h1 className="text-6xl font-bold">Z</h1>
      </div>
    </div>
  );
};

export default SlideLogoHeader;
