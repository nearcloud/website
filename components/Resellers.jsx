import { ResellerCard } from "./ResellerCard";

export const Resellers = (props) => {
  const { resellers } = props;

  return (
    <div className="container col mx-auto px-4 py-24">
      <div className="grid justify-center content-center ">
        <div className="flex items-center flex-col">
          <img className="w-24" src="rocket.svg" alt="" />
          <h2 className="text-2xl mt-4">Börja använda nearcloud</h2>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        {resellers.map((reseller, i) => (
          <ResellerCard
            key={i}
            className="w-96"
            title={reseller.title}
            description={reseller.description}
            img={reseller.img}
            tag={reseller.tag}
            links={reseller.links}
          />
        ))}
      </div>
    </div>
  );
};
