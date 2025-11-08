const Stats = () => {
  const statsData = [
    {
      number: "7+",
      label1: "Tenaga Medis",
      label2: "Profesional",
      color: "text-pink-400",
    },
    {
      number: "10+",
      label1: "Jenis Layanan",
      label2: "Kesehatan",
      color: "text-teal-500",
    },
    {
      number: "7+",
      label1: "Tempat Tidur",
      label2: "PONED (24 jam)",
      color: "text-sky-400",
    },
    {
      number: "94%",
      label1: "Kepuasan",
      label2: "Masyarakat",
      color: "text-gray-800 dark:text-white",
    },
  ];

  return (
    <div className="max-w-7xl px-4 py-16 mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center">
              <h2 className={`text-8xl font-semibold mb-4 ${stat.color}`}>
                {stat.number}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 text-lg font-bold leading-tight">
                <p>{stat.label1}</p>
                <p>{stat.label2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
