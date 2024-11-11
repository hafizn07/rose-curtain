import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  label?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageUrl,
  label = "Enquire",
}) => {
  return (
    <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full sm:w-96 hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-56 sm:h-48 m-2.5 overflow-hidden text-white rounded-md">
        <Image
          className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
          src={imageUrl}
          fill
          alt={title}
        />
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">{title}</h6>
        <p className="text-slate-600 leading-normal font-light">
          {description}
        </p>
      </div>
      <div className="px-4 pb-6 pt-0 mt-2">
        <Link
          href="#contact"
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          {label}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
