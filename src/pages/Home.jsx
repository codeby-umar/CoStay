import { useState, useEffect } from "react";

const listingsData = {
  vip: [
    { id: 1, user: "kamila", badge: "VIP", price: 5500000, currency: "$", title: "Zidaniya otelei 10 magazin", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600", avatar: "https://i.pravatar.cc/150?u=1" },
    { id: 2, user: "said", badge: "VIP", price: 230000, currency: "$", title: "Hovli sotiladi 10 ta xona", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600", avatar: "https://i.pravatar.cc/150?u=2" },
    { id: 3, user: "zarnigor", badge: "VIP", price: 410000, currency: "so'm", title: "Kunlik kvartira, Minor", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600", avatar: "https://i.pravatar.cc/150?u=3" },
    { id: 4, user: "rustam", badge: "VIP", price: 120000, currency: "$", title: "Yakkasaroy 3 xonali", image: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?w=600", avatar: "https://i.pravatar.cc/150?u=4" },
  ],
  all: [
    { id: 7, user: "baxrom", price: 68000, currency: "$", title: "Ttz 2 xonali uy sotiladi", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", avatar: "https://i.pravatar.cc/150?u=7" },
    { id: 8, user: "ziyovuddin", price: 58000, currency: "$", title: "2x kom, 48m² srochno", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400", avatar: "https://i.pravatar.cc/150?u=8" },
    { id: 9, user: "mirzo", price: 45000, currency: "$", title: "Yangi uy, Sergeli", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400", avatar: "https://i.pravatar.cc/150?u=9" },
    { id: 10, user: "olga_tash", price: 45000, currency: "$", title: "4-xonali markazda", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400", avatar: "https://i.pravatar.cc/150?u=10" },
    { id: 11, user: "baxrom", price: 95000, currency: "$", title: "Ttz 2 xonali uy sotiladi", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400", avatar: "https://i.pravatar.cc/150?u=7" },
    { id: 12, user: "ziyovuddin", price: 18000, currency: "$", title: "2x kom, 48m² srochno", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400", avatar: "https://i.pravatar.cc/150?u=8" },
    { id: 13, user: "mirzo", price: 48000, currency: "$", title: "Yangi uy, Sergeli", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400", avatar: "https://i.pravatar.cc/150?u=9" },
    { id: 14, user: "olga_tash", price: 20000, currency: "$", title: "4-xonali markazda", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400", avatar: "https://i.pravatar.cc/150?u=10" },
  ],
};

const Card = ({ item }) => (
  <div className="group cursor-pointer transition-transform duration-300 active:scale-95">
    <div className="relative aspect-4/5 sm:aspect-4/3 w-full overflow-hidden rounded-2xl sm:rounded-3xl mb-2 sm:mb-3">
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {item.badge && (
        <div className="absolute left-2 top-2 sm:left-4 sm:top-4 rounded-lg bg-white/90 px-2 py-1 text-[8px] sm:text-[10px] font-black uppercase tracking-wider text-[#e8a838] backdrop-blur-md">
          {item.badge}
        </div>
      )}
    </div>

    <div className="px-1">
      <div className="text-sm sm:text-lg font-extrabold text-[#111] leading-tight">
        {item.price.toLocaleString()} {item.currency}
      </div>
      <div className="mt-0.5 truncate text-[11px] sm:text-sm font-normal text-gray-500">
        {item.title}
      </div>
      <div className="mt-1.5 sm:mt-2.5 flex items-center gap-2 text-[10px] sm:text-[12px] font-medium text-gray-400">
        <img
          src={item.avatar}
          className="h-4 w-4 sm:h-5 sm:w-5 rounded-full object-cover"
          alt=""
        />
        <span className="truncate">{item.user}</span>
      </div>
    </div>
  </div>
);

function Home() {
  const [sortType, setSortType] = useState("new");
  const [sortedListings, setSortedListings] = useState([...listingsData.all]);
  const [showAllVip, setShowAllVip] = useState(false);

  useEffect(() => {
    let list = [...listingsData.all];
    if (sortType === "cheap") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortType === "expensive") {
      list.sort((a, b) => b.price - a.price);
    }
    setSortedListings(list);
  }, [sortType]);

  const vipToShow = showAllVip
    ? listingsData.vip
    : listingsData.vip.slice(0, 4);

  return (
    <div className="container mx-auto my-0 md:py-9">
      <main className="mx-auto px-4 py-6 sm:px-6 lg:px-10">
        <section className="mb-10 sm:mb-16">
          <div className="mb-4 sm:mb-6 flex items-baseline justify-between">
            <h2 className="text-xl sm:text-2xl font-[850]">VIP E'lonlar</h2>
            <button
              onClick={() => setShowAllVip(!showAllVip)}
              className="text-xs sm:text-sm font-bold text-[#e8a838] hover:opacity-80 transition-all"
            >
              {showAllVip ? "Yopish ↑" : "Barchasi →"}
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 transition-all">
            {vipToShow.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </section>
        <section>
          <div className="mb-4 sm:mb-6 flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-[850]">Barcha e'lonlar</h2>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-xs font-semibold text-gray-400">
                Saralash:
              </span>
              <select
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
                className="bg-transparent text-xs sm:text-sm font-bold text-[#111] outline-none cursor-pointer border-none focus:ring-0"
              >
                <option value="new">Eng yangi</option>
                <option value="cheap">Arzonroq</option>
                <option value="expensive">Qimmatroq</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            {sortedListings.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}


export default Home;