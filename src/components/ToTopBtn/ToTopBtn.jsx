import { useEffect, useState } from 'react';
import { ToTopArrowBtn } from './ToTopBtn.styled';
import { ToTopArrowIcon } from 'components/Icons/Icons';

const ToTopBtn = () => {
  const [showToTopBtn, setShowToTopBtn] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 500) {
      setShowToTopBtn(true);
    } else {
      setShowToTopBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      {showToTopBtn && (
        <ToTopArrowBtn onClick={scrollUp} $showBtn={window.scrollY > 500}>
          <ToTopArrowIcon />
        </ToTopArrowBtn>
      )}
    </>
  );
};

export default ToTopBtn;
