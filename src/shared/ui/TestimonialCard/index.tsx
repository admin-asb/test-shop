export default function TestimonialCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[300px] p-6 rounded-[15px] bg-secondary text-primary">
      {children}
    </div>
  );
}
