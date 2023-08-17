interface SlideProps {
  id: string;
  className?: string;
  children?: React.ReactNode;
}

const Slide = ({ id, className, children }: SlideProps) => {
  return (
    <div id={id} className={`slide ${className}`}>
      <div className="slide__inner">{children}</div>
    </div>
  );
};

export default Slide;
