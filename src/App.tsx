import { ScrollDir } from 'models/Scroll.model';
import AppBg from 'components/AppBg';
import SlideGroup from 'components/Slide/SlideGroup';
import Slide from 'components/Slide/Slide';
import SlideLogoHeader from 'components/Slide/SlideLogoHeader';
import MediaStack from 'components/Media/MediaStack';
import MediaCard from 'components/Media/MediaCard';
import forestZen from 'assets/treesnsky.jpg';
import SlideContent from 'components/Slide/SlideContent';

function App() {
  return (
    <div id="App">
      <AppBg />
      {/* Desktop View */}
      <div className="hidden lg:block">
        <SlideGroup
          id="intro"
          className="h-[100vh]"
          innerClassName="bg-gradient-to-r from-transparent from-55% to-70% to-tertiary"
          scrollDir={ScrollDir.HORIZONTAL}
        >
          <Slide id="intro-1">
            <SlideLogoHeader id="intro-1-slide-header" />
            <SlideContent id="intro-1-slide-content">
              <div className="w-1/3 min-w-fit">
                <div className="m-auto w-fit">
                  <h1 className="text-6xl font-bold inline-block">
                    Hello, I am <span className="text-blue-500">Jesse</span>
                  </h1>
                  <br></br>
                  <p className="text-2xl font-semibold inline-block">
                    I am a <span className="text-blue-500">software engineer</span> based in
                    <span className="text-blue-500">New York City</span>.
                  </p>
                </div>
              </div>
              <div className="w-2/3">
                <MediaStack id="intro-1-media-stack">
                  <MediaCard id="intro-1-media-card-1" src={forestZen} />
                </MediaStack>
              </div>
            </SlideContent>
          </Slide>
          <Slide id="intro-2">
            <SlideLogoHeader id="intro-2-slide-header" />
            <SlideContent id="intro-2-slide-content">
              <div className="w-1/3 min-w-fit">
                <div className="m-auto w-fit">
                  <h1 className="text-6xl font-bold">
                    Hello, I am <span className="text-blue-500">Noah</span>
                  </h1>
                  <p className="text-2xl font-semibold">
                    I am a <span className="text-blue-500">software engineer</span> based in
                    <span className="text-blue-500">New York City</span>.
                  </p>
                </div>
              </div>
              <div className="w-2/3">
                <MediaStack id="intro-2-media-stack">
                  <MediaCard id="intro-2-media-card-1" src={forestZen} />
                </MediaStack>
              </div>
            </SlideContent>
          </Slide>
          <Slide id="intro-3">
            <SlideLogoHeader id="intro-2-slide-header" />
            <SlideContent id="intro-3-slide-content">
              <div className="w-1/3 min-w-fit">
                <div className="m-auto w-fit">
                  <h1 className="text-6xl font-bold">
                    Hello, I am <span className="text-blue-500">Mark</span>
                  </h1>
                  <p className="text-2xl font-semibold">
                    I am a <span className="text-blue-500">software engineer</span> based in
                    <span className="text-blue-500">New York City</span>.
                  </p>
                </div>
              </div>
              <div className="w-2/3">
                <MediaStack id="intro-3-media-stack">
                  <MediaCard id="intro-3-media-card-1" src={forestZen} />
                </MediaStack>
              </div>
            </SlideContent>
          </Slide>
        </SlideGroup>
        <SlideGroup id="test" className="h-[100vh]" scrollDir={ScrollDir.HORIZONTAL}>
          <Slide id="test-1" className="w-full">
            <SlideLogoHeader id="test-1-slide-header" />
            <SlideContent id="test-1-slide-content">
              <div className="w-1/3 min-w-fit">
                <div className="m-auto w-fit">
                  <h1 className="text-6xl font-bold">
                    Hello, I am <span className="text-blue-500">Jesse</span>
                  </h1>
                  <p className="text-2xl font-semibold">
                    I am a <span className="text-blue-500">software engineer</span> based in
                    <span className="text-blue-500">New York City</span>.
                  </p>
                </div>
              </div>
              <div className="w-2/3">
                <MediaStack id="test-1-media-stack">
                  <MediaCard id="test-1-media-card-1" src={forestZen} />
                </MediaStack>
              </div>
            </SlideContent>
          </Slide>
          <Slide id="test-2" className="w-full">
            <SlideLogoHeader id="test-2-slide-header" />
            <SlideContent id="test-2-slide-content">
              <div className="w-1/3 min-w-fit">
                <div className="m-auto w-fit">
                  <h1 className="text-6xl font-bold">
                    Hello, I am <span className="text-blue-500">Jesse</span>
                  </h1>
                  <p className="text-2xl font-semibold">
                    I am a <span className="text-blue-500">software engineer</span> based in
                    <span className="text-blue-500">New York City</span>.
                  </p>
                </div>
              </div>
              <div className="w-2/3">
                <MediaStack id="test-2-media-stack">
                  <MediaCard id="test-2-media-card-1" src={forestZen} />
                </MediaStack>
              </div>
            </SlideContent>
          </Slide>
        </SlideGroup>
      </div>
      {/* Mobile/Tablet View */}
      <div className="lg:hidden">
        <SlideGroup id="intro" scrollDir={ScrollDir.VERTICAL}>
          <Slide id="intro-1" className="w-full">
            <SlideLogoHeader id="intro-1-slide-header" />
            <SlideContent id="intro-1-slide-content" className="flex-col">
              <div>
                <h1 className="text-6xl font-bold">
                  Hello, I am <span className="text-blue-500">Jesse</span>
                </h1>
                <p className="text-2xl font-semibold">
                  I am a <span className="text-blue-500">software engineer</span> based in
                  <span className="text-blue-500">New York City</span>.
                </p>
              </div>
              <div>
                <MediaStack id="intro-1-media-stack">
                  <MediaCard id="intro-1-media-card-1" src={forestZen} />
                </MediaStack>
              </div>
            </SlideContent>
          </Slide>
          <Slide id="intro-2" className="w-full">
            <SlideLogoHeader id="intro-2-slide-header" />
            <SlideContent id="intro-2-slide-content" className="flex-col">
              <div>
                <h1 className="text-6xl font-bold">
                  Hello, I am <span className="text-blue-500">Noah</span>
                </h1>
                <p className="text-2xl font-semibold">
                  I am a <span className="text-blue-500">software engineer</span> based in
                  <span className="text-blue-500">New York City</span>.
                </p>
              </div>
              <div>
                <MediaStack id="intro-2-media-stack">
                  <MediaCard id="intro-2-media-card-1" src={forestZen} />
                </MediaStack>
              </div>
            </SlideContent>
          </Slide>
          <Slide id="intro-3" className="w-full">
            <SlideLogoHeader id="intro-3-slide-header" />
            <SlideContent id="intro-3-slide-content" className="flex-col">
              <div>
                <h1 className="text-6xl font-bold">
                  Hello, I am <span className="text-blue-500">Mark</span>
                </h1>
                <p className="text-2xl font-semibold">
                  I am a <span className="text-blue-500">software engineer</span> based in
                  <span className="text-blue-500">New York City</span>.
                </p>
              </div>
              <div>
                <MediaStack id="intro-3-media-stack">
                  <MediaCard id="intro-3-media-card-1" src={forestZen} />
                </MediaStack>
              </div>
            </SlideContent>
          </Slide>
        </SlideGroup>
        <SlideGroup id="test" scrollDir={ScrollDir.VERTICAL}>
          <Slide id="test-1" className="w-full">
            <SlideLogoHeader id="test-1-slide-header" />
            <SlideContent id="test-1-slide-content" className="flex-col">
              <div>
                <h1 className="text-6xl font-bold">
                  Hello, I am <span className="text-blue-500">Jesse</span>
                </h1>
                <p className="text-2xl font-semibold">
                  I am a <span className="text-blue-500">software engineer</span> based in
                  <span className="text-blue-500">New York City</span>.
                </p>
              </div>
              <div>
                <MediaStack id="test-1-media-stack">
                  <MediaCard id="test-1-media-card-1" src={forestZen} />
                </MediaStack>
              </div>
            </SlideContent>
          </Slide>
          <Slide id="test-2" className="w-full">
            <SlideLogoHeader id="test-2-slide-header" />
            <SlideContent id="test-2-slide-content" className="flex-col">
              <div>
                <h1 className="text-6xl font-bold">
                  Hello, I am <span className="text-blue-500">Jesse</span>
                </h1>
                <p className="text-2xl font-semibold">
                  I am a <span className="text-blue-500">software engineer</span> based in
                  <span className="text-blue-500">New York City</span>.
                </p>
              </div>
              <div>
                <MediaStack id="test-2-media-stack">
                  <MediaCard id="test-2-media-card-1" src={forestZen} />
                </MediaStack>
              </div>
            </SlideContent>
          </Slide>
        </SlideGroup>
      </div>
    </div>
  );
}

export default App;
