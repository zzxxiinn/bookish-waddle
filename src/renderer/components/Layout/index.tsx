import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  title: string;
}
export default function Layout({ title }: LayoutProps) {
  return (
    <div className="window">
      <Header title={title} />
      <div className="window-content">
        <div className="pane-group">
          <div className="pane-sm sidebar">...</div>
          <div className="pane">...</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
