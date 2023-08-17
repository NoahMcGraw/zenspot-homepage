import { StackDir } from 'models/Stack.model';

interface MediaStackProps {
  id: string;
  className?: string;
  stackDir?: StackDir;
  children?: React.ReactNode;
}

const MediaStack = ({ id, className, stackDir = StackDir.VERTICAL, children }: MediaStackProps) => {
  return (
    <div
      id={id}
      className={`media-stack ${className} ${stackDir === StackDir.HORIZONTAL ? 'flex' : ''}`}
    >
      <div className="media-stack__inner">{children}</div>
    </div>
  );
};

export default MediaStack;
