import logo from "../assets/pencil.png"; // Import your logo image







export default function Header() {
  return (
    <header className="w-full bg-indigo-700 text-white p-3.5 fixed top-0 left-0 border-b-2">
      <div className="flex items-center ">
        <img src={logo} alt="Blog logo" className="w-9 h-9 mr-4 ml-4" />
        <h1 className="text-2xl font-mono  text-lime-200">LucidLines</h1>
      </div>
    </header>
  );
}
