const Container = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      {children}
    </div>
  );
};

export default Container;
