export const Perks = () => {
    return(
        <section className="bg-light-grey py-[7.75rem] max-[600px]:py-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-4  text-center p-4 gap-4 max-[1050px]:grid-cols-2 max-[650px]:grid-cols-1">
        <div className="flex flex-col justify-center items-center gap-4">
            <div>
                <img className="max-w-[4rem] w-full" src="./icon-1.png" alt="perk icons" />
            </div>
            <p className="font-bold">Premium Products</p>
            <p className="text-semi-dark-grey">Luxurious, high-quality cosmetics for flawless results</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
            <div>
                <img className="max-w-[4rem] w-full" src="./icon-1.png" alt="perk icons" />
            </div>
            <p className="font-bold">Crafted Perfection</p>
            <p className="text-semi-dark-grey">Meticulously processed brushes and tools for precision application</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
            <div>
                <img className="max-w-[4rem] w-full" src="./icon-1.png" alt="perk icons" />
            </div>
            <p className="font-bold">Superior Materials</p>
            <p className="text-semi-dark-grey">Finest quality ingredients and materials for long-lasting beauty</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
            <div>
                <img className="max-w-[4rem] w-full" src="./icon-1.png" alt="perk icons" />
            </div>
            <p className="font-bold">Impeccable Execution</p>
            <p className="text-semi-dark-grey">Expertly executed techniques with attention to detail</p>
        </div>
        </div>
        </section>
    )
}