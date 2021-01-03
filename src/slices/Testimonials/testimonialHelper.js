export const variants = {
  enter: direction => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: direction => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export const paginate = (newDirection, setPage, page) => {
  setPage([page + newDirection, newDirection]);
};

export const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

export const swipeConfidenceThreshold = 10000;
