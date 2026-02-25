export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        * { cursor: auto !important; }
        a, button { cursor: pointer !important; }
      `}</style>
      <div style={{
        position: "fixed",
        inset: 0,
        overflowY: "auto",
        backgroundColor: "#fff",
      }}>
        {children}
      </div>
    </>
  );
}
