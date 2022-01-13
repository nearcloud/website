export const ResellerCard = (props) => {
  const { title, description, href, img, links, tag, className } = props;

  return (
    <div
      className={`p-8 bg-white drop-shadow-lg rounded-md ${props.className}`}
    >
      <div className="flex items-center justify-between">
        <img src={props.img} alt="" />
        <span className="text-sm bg-gray-100 px-4 py-1 rounded-sm text-gray-700">
          {tag}
        </span>
      </div>
      <h3 className="font-bold mb-2 mt-4 ">{props.title}</h3>
      <p className="text-gray-500">{props.description}</p>
      <div className="flex space-x-4">
        {props.links.map((link, i) => (
          <a key={i} className="underline" href={link.href}>
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};
