export function DividerDiamond() {
	return (
		<div className="flex items-center justify-center gap-4">
			<span className="h-1 w-32 bg-gradient-to-r from-transparent to-[#E11D74]/40 sm:w-24" />
			<span className="h-2 w-2 rotate-45 bg-[#E11D74]" />
			<span className="h-1 w-32 bg-gradient-to-l from-transparent to-[#E11D74]/40 sm:w-24" />
		</div>
	);
}