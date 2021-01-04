export const initializeGsapStickyScroll = (gsap, scrollTrigger, bgBrand) => {
  const textClass = bgBrand ? 'text-white' : 'text-brand';
  gsap.utils.toArray('.image').forEach((panel, i) => {
    scrollTrigger.create({
      trigger: panel,
      start: 'top center+=100',
      end: 'bottom center-=100',
      toggleActions: 'play pause resume reverse',
      onEnter: () => {
        document
          .querySelector(`.text-container-${i}`)
          .classList.add(textClass, 'active');
      },
      onEnterBack: () => {
        document
          .querySelector(`.text-container-${i}`)
          .classList.add(textClass, 'active');
      },
      onLeave: () => {
        document
          .querySelector(`.text-container-${i}`)
          .classList.remove(textClass, 'active');
      },
      onLeaveBack: () => {
        document
          .querySelector(`.text-container-${i}`)
          .classList.remove(textClass, 'active');
      },
    });
  });
};
