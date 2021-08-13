import { Card } from "./Card";
import logo from "../../images/cowfunded_yellow.png";
import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="p-6 max-h-screen overflow-y-scroll">
      <Link to="/">
        <img className="h-20 mb-8 mt-4" src={logo} />
      </Link>

      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
