import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { wrap } from '@popmotion/popcorn';

import Row from '../../general/Row';
import Col from '../../general/Col';
import BgOverflow from '../../general/BgOverflow';
import Container from '../../general/Container';
import { useInterval } from '../../utils/hooks/useInterval';

import {
  variants,
  paginate,
  swipePower,
  swipeConfidenceThreshold,
} from './testimonialHelper';
import TestimonialButton from './TestimonialButton';
import TestimonialBody from './TestimonialBody';

const Testimonials = ({ className, content, htmlSerializer, ...rest }) => {
  const interval = Number(content.primary.rotate_interval) * 1000 || 6000;
  const [[page, direction], setPage] = useState([0, 0]);
  const [intervalDelay, setInvterval] = useState(interval);

  useInterval(() => {
    paginate(1, setPage, page);
  }, intervalDelay);

  const testimonialsIndex = wrap(0, content.fields.length, page);
  const overflow = content.primary.overflow;
  const containsABg = content.primary.bg_brand;
  const containsAOverflowFromBrand = overflow === 'from_brand';

  return (
    <BgOverflow
      className={cn(
        { 'bg-brand': content.primary?.bg_brand },
        'py-10 lg:py-20 w-full testimonial',
        className,
      )}
      type={content.primary?.overflow}
      {...rest}
    >
      <Row centerX>
        <Col xs={12} lg={content.primary.slim ? 10 : 12}>
          <AnimatePresence initial={false} custom={direction}>
            <Container>
              {content.primary.title && (
                <Row className='lg:mb-10' centerX>
                  <Col xs={12} centerX>
                    <h2
                      className={cn(
                        containsAOverflowFromBrand || containsABg
                          ? 'text-white'
                          : 'text-brand',
                      )}
                    >
                      {content.primary.title}
                    </h2>
                  </Col>
                </Row>
              )}
              <div className={cn('mx-auto px-8 mb-20')}>
                <div className='relative'>
                  <div className='overflow-hidden shadow-3xl bg-gray-100'>
                    <motion.div
                      className='relative rounded-lg block md:flex items-center'
                      style={{ minHeight: '21rem' }}
                      key={page}
                      custom={direction}
                      variants={variants}
                      initial='enter'
                      animate='center'
                      exit='exit'
                      transition={{
                        x: { type: 'spring', stiffness: 300, damping: 80 },
                        opacity: { duration: 0.2 },
                      }}
                      drag='x'
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                          paginate(1, setPage, page);
                          setInvterval(interval);
                        } else if (swipe > swipeConfidenceThreshold) {
                          paginate(-1, setPage, page);
                          setInvterval(interval);
                        }
                      }}
                    >
                      <TestimonialBody
                        htmlSerializer={htmlSerializer}
                        content={content}
                        currentIndex={testimonialsIndex}
                      />
                    </motion.div>
                  </div>
                  <TestimonialButton
                    paginate={paginate}
                    setPage={setPage}
                    page={page}
                    direction={-1}
                  />
                  <TestimonialButton
                    paginate={paginate}
                    setPage={setPage}
                    page={page}
                    direction={1}
                  />
                </div>
              </div>
            </Container>
          </AnimatePresence>
        </Col>
      </Row>
    </BgOverflow>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
  content: PropTypes.object.isRequired,
  htmlSerializer: PropTypes.func.isRequired,
};

export default Testimonials;
