import { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import PreviewItem from "../components/PreviewItem/PreviewItem";

const PreviewItemContainer = (props) => {
  const { preview, index, inViewport, forwardedRef } = props;

  const [isDescriptionVisible, setDescriptionVision] = useState(false);
  const settings = useSelector((state) => state.settings, shallowEqual);

  const openHandler = () => {
    if (settings.isMobile) {
      setDescriptionVision(true);
    }
  };

  const closeHandler = () => {
    setDescriptionVision(false);
  };

  const getRightClass = () => {
    if ((index + 1) % 3 === 0) {
      return "second-type";
    }

    if ((index + 1) % 2 === 0) {
      return "third-type";
    }

    return "first-type";
  };

  const getVision = () => ({
    type: getRightClass(),
    viewport: inViewport ? "in-view" : "not-in-view",
    status: isDescriptionVisible ? "description-visible" : "promo-visible",
  });

  return (
    <PreviewItem
      openHandler={openHandler}
      closeHandler={closeHandler}
      forwardedRef={forwardedRef}
      vision={getVision()}
      preview={preview}
      settings={settings}
    />
  );
};

export default PreviewItemContainer;
