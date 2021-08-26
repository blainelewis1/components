import { Loader5 } from "@styled-icons/remix-line/Loader5";

const Loading: React.FunctionComponent = () => {
  return (
    <div className="text-gray-700 inline-flex items-center text-lg">
      <Loader5 className="fill-current animate-spin h-6 w-6 mr-3" /> Loading...
    </div>
  );
};

export default Loading;
