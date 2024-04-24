import {AccessibilityButton, AccessibilityMenu} from "../../modules/accessibility";
import {Footer, Navbar} from "../../modules";
import {Outlet} from "react-router-dom";
import {useDispatch} from "react-redux";
import {toggleAccessibilityMenu} from "../../reducers/ accessibilityReducer.ts";
import {useEffect} from "react";

const Page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key.toLowerCase() === 'm') {
        dispatch(toggleAccessibilityMenu());
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    }
  }, [dispatch])

  return (
    <>
      <AccessibilityMenu/>
      <Navbar/>
      <Outlet/>
      <AccessibilityButton/>
      <Footer/>
    </>
  );
};

export default Page;
