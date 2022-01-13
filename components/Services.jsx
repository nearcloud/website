import { Card } from "../components/Card";

export const Services = (props) => {
  return (
    <div className="w-full bg-primary-500">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 py-24 ">
          {props.services.map((service, i) => (
            <Card
              key={i}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
