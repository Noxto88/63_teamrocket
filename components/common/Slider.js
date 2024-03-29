import { useSelector } from "react-redux";
import { openOrClose, closeSlidingComponent } from "../../redux/sliderSlice";
import { ImCancelCircle } from "react-icons/im";
import { useDispatch } from "react-redux";

const Slider = ({ children }) => {
  const openOrCloseSlider = useSelector(openOrClose);
  const dispatch = useDispatch();

  return (
    <div
      className={`${
        openOrCloseSlider
          ? "translate-x-0 ease-out"
          : "translate-x-full ease-in"
      } z-10 fixed right-0 top-0 max-w-xl w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300`}
    >
      <ImCancelCircle
        size={28}
        color="grey"
        onClick={() => dispatch(closeSlidingComponent())}
      />
      {children}
    </div>
  );
};

export default Slider;
