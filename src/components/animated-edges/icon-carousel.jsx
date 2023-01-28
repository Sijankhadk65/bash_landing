const IconCarousel = ({ icons }) => {
  const [currentIcon, setCurrentIcon] = useState(0);
  const rotateInterval = 3000; //3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIcon((currentIcon + 1) % icons.length);
    }, rotateInterval);
    return () => clearInterval(intervalId);
  }, [currentIcon, icons.length, rotateInterval]);

  return (
    <div className="relative flex justify-center items-center h-64 w-64">
      {icons.map((icon, index) => (
        <div
          key={index}
          className={`bg-${icon} h-full w-full absolute transition duration-300 ${
            currentIcon === index ? "opacity-100 rotate-360" : "opacity-0"
          }`}
        ></div>
      ))}
    </div>
  );
};
