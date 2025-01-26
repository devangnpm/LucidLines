import logo from "../assets/pencil.png"; // Import your logo image

export default function Header() {


  const avatarUrl = `https://api.dicebear.com/9.x/lorelei/svg?backgroundColor=5a5a5a&seed=Felix&scale=100&mouth=happy02&hair=variant08`;

  return (
    <header className="w-full bg-gradient-to-r from-stone-600 to-emerald-700 text-white p-3.5 fixed top-0 left-0 border-blue-700 z-50">
      <div className="flex items-center justify-between px-4">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img src={logo} alt="Blog logo" className="w-10 h-10 mr-5" />
          <h1 className="text-[26px] font-mono text-lime-100 filter drop-shadow-[0_0_8px_rgba(163,230,53,0.8)]">LucidLines_</h1>
        </div>

        {/* User Avatar */}
        <div className="flex items-center ">
          <img
            src={avatarUrl}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border border-white shadow-lg"
          />
        </div>
      </div>
    </header>
  );
}
