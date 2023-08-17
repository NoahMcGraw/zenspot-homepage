interface SlideContentProps {
  id: string;
  className?: string;
  children?: React.ReactNode;
}

const SlideContent = ({ id, className, children }: SlideContentProps) => {
  return (
    <section id={id} className={`slide-content ${className}`}>
      {children}
    </section>
  );
};

export default SlideContent;
