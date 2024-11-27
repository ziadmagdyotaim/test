import { useLayoutConfig } from "../../../context/LayoutConfigContext";

const L1HomePage = () => {
  const { layoutConfig } = useLayoutConfig();

  return <h1>Hello L1 {layoutConfig.name} Home Page</h1>;
};

export default L1HomePage;
