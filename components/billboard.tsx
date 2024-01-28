import { Billboard as BillboardTypes } from "@/types";

interface BillboardProps {
  data: BillboardTypes;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[3/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data.imageURL})` }}
      >
        <div className="bg-white/5 h-full w-full flex flex-col justify-center items-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
