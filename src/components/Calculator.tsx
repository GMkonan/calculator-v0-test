import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Calculator = () => {
  return (
    <Card className="w-64 rounded-3xl">
      <section className="rounded-t-xl bg-blue-200 p-8">
        <div className="border-2 border-blue-300 p-2 text-right text-3xl">
          <input
            value={0}
            className="w-full bg-transparent text-right focus:outline-none"
          />
        </div>
      </section>
      <section className="grid grid-cols-4 gap-4 rounded-b-xl bg-white p-4">
        <Button className="col-span-2 bg-blue-400 bg-opacity-80 text-lg">
          Clear
        </Button>
        <Button className="bg-blue-200 text-lg text-black">/</Button>
        <Button className="bg-blue-200 text-lg text-black">*</Button>

        <Button className="bg-blue-500 text-lg">7</Button>
        <Button className="bg-blue-500 text-lg">8</Button>
        <Button className="bg-blue-500 text-lg ">9</Button>
        <Button className="bg-blue-200 text-lg text-black">-</Button>

        <Button className="bg-blue-500 text-lg">4</Button>
        <Button className="bg-blue-500 text-lg">5</Button>
        <Button className="bg-blue-500 text-lg ">6</Button>
        <Button className="bg-blue-200 text-lg text-black">+</Button>

        <Button className="bg-blue-500 text-lg">1</Button>
        <Button className="bg-blue-500 text-lg">2</Button>
        <Button className="bg-blue-500 text-lg ">3</Button>
        <Button className="bg-blue-500 text-lg">=</Button>

        <Button className="col-span-2 bg-blue-500 text-lg">0</Button>
        <Button className="bg-blue-500 text-lg">.</Button>
      </section>
    </Card>
  );
};

export default Calculator;
