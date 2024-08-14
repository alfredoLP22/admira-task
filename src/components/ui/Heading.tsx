const Heading = ({ title }: { title: string }) => {
  return (
    <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-gray-200 pb-2 mb-4">
      {title}
    </h2>
  );
};

export default Heading;
