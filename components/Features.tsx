"use client";
import { useRef } from "react";
import { SearchIcon, ActivityIcon, UserRoundIcon, BookOpenTextIcon, LightbulbIcon } from "@animateicons/react/lucide";

type FeatureCardProps = {
  icon: React.ForwardRefExoticComponent<any>;
  title: string;
  description: string;
  className?: string;
};

type IconHandle = {
  startAnimation: () => void;
  stopAnimation: () => void;
};

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className = "",
}: FeatureCardProps) => {
  const iconRef = useRef<IconHandle>(null);

  return (
    <div
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      className={` ${className}`}
    >
      <div className="flex items-center justify-center m-1 rounded-t-xl bg-linear-to-b from-gray-300/30 via-gray-300/10 to-transparent p-1 pt-4" >
        <Icon
          ref={iconRef}
          size={48}
          duration={1}
          color="#2A835F"
        />

      </div>

      <div className=" px-4 py-2 leading-tight">
        <h1 className=" font-medium text-brandBlack text-lg">{title}</h1>

        <p className="text-sm leading-tight mt-2 text-neutral-700">
          {description}
        </p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section>
      <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-neutral-400 px-3 py-1.5">
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
          <span className="relative inline-flex size-2.5 rounded-full bg-brand" />
        </span>

        <span className="text-xs font-medium text-brand">
          FEATURES
        </span>
      </div>

      <div className="mx-auto w-fit text-center">
        <h1 className="text-xl font-semibold md:text-4xl">
          Explore <span className="text-brand">beyond </span>
          the profile
        </h1>

        <p className="mt-1 text-md leading-[1.3] tracking-tight md:text-lg">
          Go beyond basic stats. Discover repositories, activity,
          <br />
          languages and insights that reveal how developers build
          and contribute.
        </p>
      </div>

      <div className="mx-auto my-2 grid w-full  max-w-4xl grid-cols-6 gap-4 px-8 sm:px-24 py-8 rounded">
        <FeatureCard
          className="col-span-6 md:col-span-3 rounded-xl bg-[#FCFBFC] shadow-sm "
          icon={SearchIcon}
          title="Developer search"
          description="Search by username to explore their profile, repositories, activity, and developer insights."
        />

        <FeatureCard
          className="col-span-6 md:col-span-3 rounded-xl bg-[#FCFBFC] shadow-sm"
          icon={ActivityIcon}
          title="Activity insights"
          description="Explore developer activity, contributions and important GitHub insights in one place."
        />

        <FeatureCard
          className="col-span-6 md:col-span-2 rounded-xl bg-[#FCFBFC] shadow-sm"
          icon={UserRoundIcon}
          title="Developer overview"
          description="Understand developer profiles through stats, repositories, languages, activity, and insights."
        />

        <FeatureCard
          className="col-span-6 md:col-span-2 rounded-xl bg-[#FCFBFC] shadow-sm"
          icon={BookOpenTextIcon}
          title="Repositories"
          description="Explore repositories in depth with detailed information about stars, activity, topics, and project updates."
        />

        <FeatureCard
          className="col-span-6 md:col-span-2 rounded-xl bg-[#FCFBFC] shadow-sm"
          icon={LightbulbIcon}
          title="Developer Insights"
          description="Get useful insights from GitHub data through a clean interactive interface."
        />
      </div>
    </section>
  );
};

export default Features;