const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div
        className="flex items-center space-x-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md"
        role="alert"
      >
        <svg
          className="w-6 h-6 text-red-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18.364 5.636l-12.728 12.728M6.636 5.636l12.728 12.728"
          ></path>
        </svg>
        <span className="text-lg font-medium">{message}</span>
      </div>
    </div>
  );
};

export default ErrorMessage;
