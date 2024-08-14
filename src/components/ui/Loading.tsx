const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex items-center justify-center space-x-2">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-primary"></div>
        <span className="text-lg font-medium text-gray-700">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
