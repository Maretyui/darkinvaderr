import { Car, Trophy, Flag, Camera } from "lucide-react"

function Info() {
  return (
    <section className="bg-background text-foreground py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <img 
              src="/plane-fancy.png" 
              alt="Darkinvaderr Skylines"
              className="rounded-xl w-full h-auto shadow-2xl grayscale-[20%] border border-border hover:scale-[1.03] transition duration-300 ease-in-out" 
            />
          </div>

          <div className="w-full lg:w-1/2 bg-card text-card-foreground border border-border rounded-lg p-8 md:p-12 shadow-xl">
            <h2 className="text-4xl font-bold mb-1 tracking-tighter uppercase italic font-sans">
              What We <span className="text-primary">Do</span>
            </h2>
            <div className="w-12 h-1 bg-primary mb-8"></div>
            
            <div className="space-y-6 text-sm leading-relaxed tracking-wide text-muted-foreground">
              <p>Car meets, GTA Heists, races, photo competitions and modding.</p>
              <p>Whether you're a true car enthusiast who can name every JDM car ever built, or you just want to showcase your car at meets or even just get free cash, there is a place for you at Darkinvaderr Gaming.</p>
            </div>

            <div className="mt-10 pt-10 border-t border-border grid grid-cols-2 gap-y-6 gap-x-4">
              <div className="flex items-center gap-3">
                <Car className="text-foreground size-[18px]" aria-hidden="true" />
                <span className="uppercase text-[11px] font-bold tracking-widest">Car Meets</span>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="text-foreground size-[18px]" aria-hidden="true" />
                <span className="uppercase text-[11px] font-bold tracking-widest">Modded Heists</span>
              </div>
              <div className="flex items-center gap-3">
                <Flag className="text-foreground size-[18px]" aria-hidden="true" />
                <span className="uppercase text-[11px] font-bold tracking-widest">Racing</span>
              </div>
              <div className="flex items-center gap-3">
                <Camera className="text-foreground size-[18px]" aria-hidden="true" />
                <span className="uppercase text-[11px] font-bold tracking-widest">Photo Contests</span>
              </div>
            </div>
          </div>
        </div>

        <div id="about" className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="w-full lg:w-1/2">
            <img 
              src="/garage.png" 
              alt="Darkinvaderr Car Meet"
              className="rounded-xl w-full h-auto shadow-2xl grayscale-[20%] border border-border hover:scale-[1.03] transition duration-300 ease-in-out" 
            />
          </div>

          <div className="w-full lg:w-1/2 bg-card text-card-foreground border border-border rounded-lg p-8 md:p-12 shadow-xl">
            <h2 className="text-4xl font-bold mb-1 tracking-tighter uppercase italic font-sans">
              Who We <span className="text-primary">Are</span>
            </h2>
            <div className="w-12 h-1 bg-primary mb-8"></div>
            
            <div className="space-y-6 text-sm leading-relaxed tracking-wide text-muted-foreground">
              <p>Founded at the end of 2024 by Darkinvaderr, with a vision to create a community where GTA Members can come together and earn some cash.</p>
              <p>At the moment, we are two enthusiastic individuals working to make the community a welcoming environment for everyone, alongside with all our members.</p>
            </div>

            <div className="mt-12 flex justify-start gap-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2</div>
                <div className="uppercase text-[10px] font-bold tracking-[0.2em]">Staff Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="uppercase text-[10px] font-bold tracking-[0.2em]">Active Members</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Info;