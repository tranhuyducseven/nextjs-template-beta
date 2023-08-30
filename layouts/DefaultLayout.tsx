import DarkModeButton from "@components/DarkModeButton";

export const DefaultLayout: IComponent = ({ children }) => {
  return (
    <div className="relative h-[calc(90vh+3px)]  flex flex-col">
      <DarkModeButton />
      {children}
    </div>
  );
};
