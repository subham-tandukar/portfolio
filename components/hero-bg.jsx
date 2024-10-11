import React from "react";
import StarIcon from "@/components/star-icon";
import HeroOrbit from "@/components/hero-orbit";

const HeroBg = () => {
  return (
    <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
      <div className="h-[620px] w-[620px] hero-ring"></div>
      <div className="h-[820px] w-[820px] hero-ring"></div>
      <div className="h-[1020px] w-[1020px] hero-ring"></div>
      <div className="h-[1220px] w-[1220px] hero-ring"></div>

      <HeroOrbit
        size={430}
        rotation={-14}
        orbitDuration="30s"
        spinDuration="3s"
      >
        <StarIcon size={32} opacity="0.2" />
      </HeroOrbit>
      <HeroOrbit size={440} rotation={79} orbitDuration="32s" spinDuration="3s">
        <StarIcon size={20} opacity="0.2" />
      </HeroOrbit>
      <HeroOrbit size={450} rotation={-78} orbitDuration="34s">
        <div className="orbit-ball h-2 w-2"></div>
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-28} orbitDuration="36s">
        <div className="orbit-ball h-2 w-2"></div>
      </HeroOrbit>
      <HeroOrbit
        size={530}
        rotation={178}
        orbitDuration="38s"
        spinDuration="3s"
      >
        <StarIcon size={40} opacity="0.2" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={0} orbitDuration="40s" spinDuration="6s">
        <StarIcon size={48} />
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98} orbitDuration="42s" spinDuration="6s">
        <StarIcon size={32} />
      </HeroOrbit>

      <HeroOrbit
        size={710}
        rotation={144}
        orbitDuration="44s"
        spinDuration="6s"
      >
        <StarIcon size={56} opacity="0.2" />
      </HeroOrbit>
      <HeroOrbit size={720} rotation={120} orbitDuration="46s">
        <div className="orbit-ball h-3 w-3"></div>
      </HeroOrbit>
      <HeroOrbit
        size={800}
        rotation={-72}
        orbitDuration="48s"
        spinDuration="6s"
      >
        <StarIcon size={112} />
      </HeroOrbit>
    </div>
  );
};

export default HeroBg;
