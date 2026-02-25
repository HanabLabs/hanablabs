export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        html, body { overflow: auto !important; height: auto !important; }
        * { cursor: auto !important; }
        a, button { cursor: pointer !important; }
      `}</style>
      {children}
    </>
  );
}
