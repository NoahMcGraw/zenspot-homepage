import { ScrollDir } from 'models/Scroll.model';
import AppBg from 'components/AppBg';
import SlideGroup from 'components/Slide/SlideGroup';
import Slide from 'components/Slide/Slide';
import SlideLogoHeader from 'components/Slide/SlideLogoHeader';
import MediaStack from 'components/Media/MediaStack';
import MediaCard from 'components/Media/MediaCard';
import forestZen from 'assets/treesnsky.jpg';

function App() {
  return (
    <div id="App">
      <AppBg />
      <SlideGroup id="intro" className="h-[100vh]" scrollDir={ScrollDir.HORIZONTAL}>
        <Slide id="intro-1" className="w-full">
          <SlideLogoHeader id="intro-1-slide-header" />
          <section className="flex flex-1 items-center justify-between">
            <div className="w-1/3">
              <h1 className="text-6xl font-bold">
                Hello, I am <span className="text-blue-500">Jesse</span>
              </h1>
              <p className="text-2xl font-semibold">
                I am a <span className="text-blue-500">software engineer</span> based in
                <span className="text-blue-500">New York City</span>.
              </p>
            </div>
            <div className="w-2/3">
              <MediaStack id="intro-1-media-stack">
                <MediaCard id="intro-1-media-card-1" src={forestZen} />
              </MediaStack>
            </div>
          </section>
        </Slide>
        <Slide id="intro-2" className="w-full">
          <SlideLogoHeader id="intro-2-slide-header" />
          <section className="flex flex-1 items-center justify-between">
            <div className="w-1/3">
              <h1 className="text-6xl font-bold">
                Hello, I am <span className="text-blue-500">Noah</span>
              </h1>
              <p className="text-2xl font-semibold">
                I am a <span className="text-blue-500">software engineer</span> based in
                <span className="text-blue-500">New York City</span>.
              </p>
            </div>
            <div className="w-2/3">
              <MediaStack id="intro-2-media-stack">
                <MediaCard id="intro-2-media-card-1" src={forestZen} />
              </MediaStack>
            </div>
          </section>
        </Slide>
        <Slide id="intro-3" className="w-full">
          <SlideLogoHeader id="intro-2-slide-header" />
          <section className="flex flex-1 items-center justify-between">
            <div className="w-1/3">
              <h1 className="text-6xl font-bold">
                Hello, I am <span className="text-blue-500">Mark</span>
              </h1>
              <p className="text-2xl font-semibold">
                I am a <span className="text-blue-500">software engineer</span> based in
                <span className="text-blue-500">New York City</span>.
              </p>
            </div>
            <div className="w-2/3">
              <MediaStack id="intro-2-media-stack">
                <MediaCard id="intro-2-media-card-1" src={forestZen} />
              </MediaStack>
            </div>
          </section>
        </Slide>
      </SlideGroup>
      <SlideGroup id="test" className="h-[100vh]" scrollDir={ScrollDir.HORIZONTAL}>
        <Slide id="test-1" className="w-full">
          <SlideLogoHeader id="test-1-slide-header" />
          <section className="flex flex-1 items-center justify-between">
            <div className="w-1/3">
              <h1 className="text-6xl font-bold">
                Hello, I am <span className="text-blue-500">Jesse</span>
              </h1>
              <p className="text-2xl font-semibold">
                I am a <span className="text-blue-500">software engineer</span> based in
                <span className="text-blue-500">New York City</span>.
              </p>
            </div>
            <div className="w-2/3">
              <MediaStack id="test-1-media-stack">
                <MediaCard id="test-1-media-card-1" src={forestZen} />
              </MediaStack>
            </div>
          </section>
        </Slide>
        <Slide id="test-2" className="w-full">
          <SlideLogoHeader id="test-2-slide-header" />
          <section className="flex flex-1 items-center justify-between">
            <div className="w-1/3">
              <h1 className="text-6xl font-bold">
                Hello, I am <span className="text-blue-500">Jesse</span>
              </h1>
              <p className="text-2xl font-semibold">
                I am a <span className="text-blue-500">software engineer</span> based in
                <span className="text-blue-500">New York City</span>.
              </p>
            </div>
            <div className="w-2/3">
              <MediaStack id="test-2-media-stack">
                <MediaCard id="test-2-media-card-1" src={forestZen} />
              </MediaStack>
            </div>
          </section>
        </Slide>
      </SlideGroup>
    </div>
  );
}

export default App;
