import React, { useEffect, useRef, useState } from 'react';
import { Rec } from './';
import gsap from 'gsap';

function AboutIntro({ scroll }) {
  const titleRef = useRef(null);

  const firstTarget = useRef(null);
  const secondTarget = useRef(null);
  const thirdTarget = useRef(null);
  const thirdTargetChild = useRef(null);

  const tl = gsap.timeline();
  useEffect(() => {
    const canvas = document.querySelector('#Rcanvas');

    gsap.set(canvas, { opacity: 0 });
    gsap.set(firstTarget.current, { top: '45%', opacity: 0 }); // 계산기
    gsap.set(secondTarget.current, { top: '35%', opacity: 0 }); // 달력
    gsap.set(thirdTarget.current, { right: -100, opacity: 0, rotate: 140 }); // 사진

    if (!scroll) return;

    tl.to(titleRef.current, {
      duration: 0.7,
      opacity: 1,
      y: 0,
      ease: 'power3.out',
    })
      .to([firstTarget.current, secondTarget.current], 0.7, {
        top: 'auto',
        opacity: 1,
        ease: 'slow(0.7, 0.7, false)',
      })
      .to(thirdTarget.current, 1, {
        right: 0,
        rotate: 0,
        opacity: 1,
        ease: 'power1.in',
      })
      .to(canvas, 1, { opacity: 1, ease: 'power2.in' });
  }, [scroll]);

  return (
    <article id="aboutIntro">
      <Rec />
      <div className="aboutIntro__inner">
        <h2 ref={titleRef}>ABOUT</h2>
        <div className="aImg" ref={thirdTarget}>
          <img src="image/about.png" alt="어바웃페이지 사진입니다." ref={thirdTargetChild} />
        </div>
        <div className="calc" ref={firstTarget}>
          <span className="ir">계산기그림</span>
        </div>
        <div className="date" ref={secondTarget}>
          <span className="ir">달력그림</span>
        </div>
      </div>
    </article>
  );
}

export default AboutIntro;
