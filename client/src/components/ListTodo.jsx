export default function AccordionExpandIcon() {
	return (
		<>
			<div className="pl-10">
				<div className="searchTasks">
					<div className="flex  bg-sky-600 p-3 rounded-lg w-full!important ">
						<div className="flex w-full mx-10 rounded-lg my-3 bg-white">
							<input
								className=" w-full border-none rounded-lg bg-transparent px-4 py-5 text-gray-400 outline-none focus:outline-none "
								type="search"
								name="search"
								placeholder="Search..."
							/>
							<button
								type="submit"
								className="m-2 rounded bg-blue-600 px-4 py-2 text-white"
							>
								<svg
									className="fill-current h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									version="1.1"
									id="Capa_1"
									x="0px"
									y="0px"
									viewBox="0 0 56.966 56.966"
									xml:space="preserve"
									width="512px"
									height="512px"
								>
									<path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div className="flex flex-col  justify-center items-center">
					<div
						className="!z-5 relative rounded-[20px] bg-clip-border shadow-3xl 
        shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined"
					>
						<div className="relative flex flex-row justify-between">
							<div className="flex items-center">
								<div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-100 dark:bg-white/5">
									<span className="material-symbols-rounded h-6 w-6 text-brand-500 dark:text-white">
										check_circle
									</span>
								</div>
								<h4 className="ml-4 text-xl font-bold text-navy-700 dark:text-white">
									Tasks
								</h4>
							</div>
							<button className="flex items-center text-xl hover:cursor-pointer bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10 rounded-lg">
								<svg
									stroke="currentColor"
									fill="currentColor"
									stroke-width="0"
									viewBox="0 0 16 16"
									className="h-6 w-6"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
								</svg>
							</button>
						</div>

						<div className="h-full w-full">
							<div className="mt-5 flex items-center justify-between p-2">
								<div className="flex items-center justify-center gap-2">
									<input
										type="checkbox"
										className="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400"
										name="weekly"
									/>
									<p className="text-base font-bold text-navy-700 dark:text-white">
										Landing Page Design
									</p>
								</div>
                <div className='flex gap-2 items-center'>
                  <i class='bx bxs-trash-alt hover:font-bold hover:text-red-600 w-10 cursor-pointer text-2xl '></i>
                  <i class='bx bxs-message-square-edit hover:font-bold hover:text-blue-600 w-10 cursor-pointer text-2xl'></i>
                </div>
							</div>

							<div className="mt-2 flex items-center justify-between p-2">
								<div className="flex items-center justify-center gap-2">
									<input
										type="checkbox"
										className="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400"
										name="weekly"
										checked
									/>
									<p className="text-base font-bold text-navy-700 dark:text-white">
										Mobile App Design Mobile App Design Mobile App Design Mobile
										App Design Mobile App Design Mobile App Design Mobile App
										Design
									</p>
								</div>
                <div className='flex gap-2 items-center'>
                  <i class='bx bxs-trash-alt hover:font-bold hover:text-red-600 w-10 cursor-pointer text-2xl '></i>
                  <i class='bx bxs-message-square-edit hover:font-bold  hover:text-blue-600 w-10 cursor-pointer text-2xl'></i>
                </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
