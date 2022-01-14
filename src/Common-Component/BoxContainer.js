export default function BoxContainer({ children, classname = "" }) {
  return (
    <div className={"w-[min(1024px,_100%)] mx-auto p-4" + " " + className}>
      {children}
    </div>
  );
}
