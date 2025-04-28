import AppWrapper from "@/components/wrapper/app-wrapper";

const HomePage = () => {
  return (
    <AppWrapper>
      <div className="flex justify-between gap-2 items-center h-full w-full">
        <div className="aspect-square bg-red-500 w-10"></div>
        <div className="aspect-square bg-red-500 w-10"></div>
        <div className="aspect-square bg-red-500 w-10"></div>
        <div className="aspect-square bg-red-500 w-10"></div>
        <div className="aspect-square bg-red-500 w-10"></div>
        <div className="aspect-square bg-red-500 w-10"></div>
      </div>
    </AppWrapper>
  );
};

export default HomePage;
