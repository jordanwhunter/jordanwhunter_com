import {useContext} from "react";
import {ActiveSectionContext} from "@/context";

const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSection hook must be used within ActiveContextProvider",
    );
  }

  return context;
};

export default useActiveSection;
