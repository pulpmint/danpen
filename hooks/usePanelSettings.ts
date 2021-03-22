import { useContext } from "react";
import PanelContext, { IPanelContext } from "../context/PanelContext";

const usePanelSettings = (): IPanelContext => useContext(PanelContext);

export default usePanelSettings;
