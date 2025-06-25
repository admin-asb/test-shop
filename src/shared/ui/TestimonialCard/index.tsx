export default function TestimonialCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-300 p-6 rounded-15 bg-secondary text-primary">
      {children}
    </div>
  );
}
