import { FaGithub, FaSteam, FaYoutube, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#292522] text-white">
      <div className="px-10 py-16">

        <div className="flex flex-col md:flex-row justify-between gap-16">


          <div className="w-full">

            <p className="text-sm tracking-[0.3em] uppercase mb-4 text-center">
              Redes jijoooo
            </p>

            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center">
              Hay que mover el cacharro
            </h2>

            <div className="flex justify-center gap-10 text-xl">

              <a
                href="https://github.com/BorisVanLier"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 hover:opacity-60 transition"
              >
                <FaGithub size={36} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.youtube.com/@boroselcrack7u7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 hover:opacity-60 transition"
              >
                <FaYoutube size={36} />
                <span>YouTube</span>
              </a>
              
              <a
                href="https://x.com/BorosSFM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 hover:opacity-60 transition"
              >
                <FaXTwitter size={36} />
                <span>Twitter</span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;