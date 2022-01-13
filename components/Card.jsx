export const Card = (props) => {
  const { title, description, href, img } = props;

  return (
    <div className="p-8 bg-white drop-shadow-lg rounded-md">
      <h3 className="mb-2 font-bold underline decoration-2 decoration-primary-500">
        {props.title}
      </h3>
      <p className="text-gray-500">{props.description}</p>
    </div>
  );
};
