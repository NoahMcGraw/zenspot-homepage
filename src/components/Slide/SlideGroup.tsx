import { ScrollDir } from 'models/Scroll.model';
import { useEffect } from 'react';
import debounce from 'utils/debounce';

interface SlideGroupProps {
  id: string;
  className?: string;
  innerClassName?: string;
  scrollDir?: string;
  children?: React.ReactNode;
}

const SlideGroup = ({
  id,
  className,
  innerClassName,
  scrollDir = ScrollDir.VERTICAL,
  children,
}: SlideGroupProps) => {
  useEffect(() => {
    // if the scroll direction is horizontal, then we need to set a watcher for the mousewheel event that scrolls the slide group horizontally and does not bubble up to the window
    if (scrollDir === ScrollDir.HORIZONTAL) {
      const slideGroup = document.getElementById(`${id}`);
      if (slideGroup) {
        const handleWheel = (e: WheelEvent) => {
          // If the element can still be scrolled further in the direction of the event and the element is vertically centered in the viewport, then prevent the default behavior of the event and scroll the element in the direction of the event
          if (
            ((e.deltaY < 0 && slideGroup.scrollLeft > 0) ||
              (e.deltaY > 0 &&
                slideGroup.scrollLeft < slideGroup.scrollWidth - slideGroup.clientWidth)) &&
            slideGroup.getBoundingClientRect().bottom === window.innerHeight
          ) {
            e.preventDefault();
            doDebouncedScrollHorizontal(e);
          }
        };
        slideGroup.addEventListener('wheel', handleWheel);

        const doDebouncedScrollHorizontal = debounce(async (e: WheelEvent) => {
          await animateScrollDislodge(slideGroup);
          slideGroup.scrollLeft += (e.deltaY / Math.abs(e.deltaY)) * slideGroup.clientWidth;
        }, 750);

        const animateScrollDislodge = (target: HTMLElement) =>
          new Promise<number>((resolve) => {
            const shakeIntensity = 40;
            target.style.transform = `translateX(${shakeIntensity}px)`;
            setTimeout(() => {
              target.style.transform = `translateX(0px)`;
              resolve(shakeIntensity);
            }, 200);
          });

        // Return a cleanup function to remove the event listener
        return () => {
          slideGroup.removeEventListener('wheel', handleWheel);
        };
      }
    }
  }, [scrollDir, id]);

  return (
    <div
      id={id}
      className={`slide-group scroll-smooth transition-transform duration-200 ${
        scrollDir === ScrollDir.HORIZONTAL ? 'whitespace-nowrap overflow-x-hidden' : ''
      } ${className}`}
    >
      <div id={`${id}-inner`} className={`slide-group__inner ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default SlideGroup;
