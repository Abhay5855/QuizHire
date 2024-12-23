import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { TvMinimal, ScreenShare, Check } from 'lucide-react';

const InterviewPreferencesStep = () => {
	const [selectedOption, setSelectedOption] = useState<string | null>(null);
	const [hoveredOption, setHoveredOption] = useState<string | null>(null);

	const options = [
		{
			id: 'video',
			icon: TvMinimal,
			title: 'Video Conference',
			description: 'I often use tools like Zoom or Google Meet',
		},
		{
			id: 'screen',
			icon: ScreenShare,
			title: 'Screen Sharing',
			description: 'Assign tasks to candidates',
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.2 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: 'easeOut' },
		},
	};

	const PreferenceCard = ({ option }: { option: (typeof options)[0] }) => {
		const isSelected = selectedOption === option.id;
		const isHovered = hoveredOption === option.id;
		const Icon = option.icon;

		return (
			<motion.div variants={itemVariants} whileTap={{ scale: 0.98 }}>
				<Card
					className={`
            relative cursor-pointer transition-all duration-300
            hover:shadow-lg border-2
            ${
							isSelected
								? 'border-primary shadow-primary/25'
								: isHovered
									? 'border-primary/50'
									: 'border-transparent'
						}
          `}
					onClick={() => setSelectedOption(option.id)}
					role="button"
					tabIndex={0}
					onKeyDown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							setSelectedOption(option.id);
						}
					}}
				>
					<CardContent className="flex flex-col gap-4 items-center justify-center p-6">
						<motion.div
							className={`
                rounded-full p-4
                ${isSelected ? 'bg-primary' : 'bg-primary/90'}
                text-white
              `}
							animate={{
								scale: isHovered ? 1.1 : 1,
							}}
							transition={{ duration: 0.3 }}
						>
							<Icon className="w-8 h-8" />
						</motion.div>

						<section className="text-center space-y-2">
							<motion.h2
								className="text-lg font-semibold"
								animate={{
									color: isSelected ? 'var(--primary)' : '#000',
								}}
								transition={{ duration: 0.3 }}
							>
								{option.title}
							</motion.h2>
							<p className="text-sm text-muted-foreground">
								{option.description}
							</p>
						</section>

						<AnimatePresence>
							{isSelected && (
								<motion.div
									initial={{ scale: 0, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									exit={{ scale: 0, opacity: 0 }}
									transition={{ duration: 0.2 }}
									className="absolute top-3 right-3"
								>
									<div className="rounded-full bg-primary p-1">
										<Check className="w-4 h-4 text-white" />
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</CardContent>
				</Card>
			</motion.div>
		);
	};

	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={containerVariants}
			className="max-w-4xl mx-auto p-6"
		>
			<motion.h1
				variants={itemVariants}
				className="font-semibold text-3xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
			>
				How do you prefer to carry out your interviews?
			</motion.h1>

			<motion.p
				variants={itemVariants}
				className="text-sm text-muted-foreground mt-3"
			>
				Tell us how you typically conduct interviews, so we can provide a
				tailored experience that fits your workflow.
			</motion.p>

			<motion.div variants={containerVariants} className="mt-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{options.map((option) => (
						<PreferenceCard key={option.id} option={option} />
					))}
				</div>

				<AnimatePresence>
					{selectedOption && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							className="mt-8 text-center"
						>
							<motion.p
								className="text-sm text-primary font-medium"
								initial={{ scale: 0.9 }}
								animate={{ scale: 1 }}
								transition={{ type: 'spring', stiffness: 200 }}
							>
								{selectedOption === 'video'
									? "Great! We'll optimize your experience for video interviews."
									: "Perfect! We'll include screen sharing features in your workflow."}
							</motion.p>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</motion.div>
	);
};

export default InterviewPreferencesStep;
