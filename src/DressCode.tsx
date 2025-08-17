import Flower from "./assets/flower.svg";

export default function DressCode() {
  const colors = [
    { hex: "#996633" },
    { hex: "#C2B280" },
    { hex: "#f5deb3" },
    { hex: "#7BA05B" },
    { hex: "#d4efdf" },
  ];

  return (
    <section className="  flex flex-col items-center">
        
        <img src={Flower} alt="Flower" className="w-64 h-64" />
      
      <h3 className="text-1,5xl md:text-2xl lg:text-4xl font-light text-center text-gray-800   ">
        ДРЕС-КОД
      </h3>
      <p className="text-gray-700 text-lg md:text-xl mt-4 max-w-2xl text-center pl-10 pr-10">
        Будемо раді, якщо Ви підтримаєте кольорову гаму нашого весілля,{" "}
        <span className="font-semibold text--700">а також їхні відтінки.</span>
      </p>
     
      {/* Палетка кольорів */}
      <div className="flex gap-6 mt-8 flex-wrap justify-center">
        {colors.map((c) => (
          <div key={c.hex} className="flex flex-col items-center group">
            <div
              className={`w-12 h-12 rounded-full shadow-md transition-transform transform group-hover:scale-110`}
              style={{
                backgroundColor: c.hex,
              }}
            ></div>
          </div>
        ))}
      </div>
      <img src={Flower} alt="Flower" className="w-64 h-64" />
      
    </section>
  );
}
