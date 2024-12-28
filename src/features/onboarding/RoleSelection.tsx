import React from 'react';
import { motion } from 'motion/react';
import type { RoleSelection } from '@/types/roleSelection';
import { Card, CardContent } from '@/components/ui/card';
import { ROLES } from '@/constants';

const RoleSelection: React.FC<RoleSelection> = ({
	handleRoleSelection,
	selectedRole,
}) => {
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: 'easeOut',
			},
		},
	};

	const RoleCard = ({ item }: { item: (typeof ROLES)[0] }) => {
		const isSelected = selectedRole === item.name;

		return (
			<motion.div
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
				initial="hidden"
				animate="visible"
			>
				<Card
					className={`transform transition-all duration-200 hover:shadow-lg ${
						isSelected
							? 'bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2'
							: 'hover:border-primary/50'
					}`}
					onClick={() => handleRoleSelection(item.name)}
				>
					<CardContent
						className={`text-center py-6 px-4 flex flex-col items-center justify-center cursor-pointer  ${isSelected ? 'scale-105 text-white' : ''}
            `}
					>
						<span
							className="text-lg font-medium"
							role="button"
							tabIndex={item.id}
						>
							{item.name}
						</span>
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
				Tell us about yourself
			</motion.h1>

			<motion.p
				variants={itemVariants}
				className="text-sm text-muted-foreground mt-3"
			>
				To get started, tell us a little more about yourself so we can
				personalize your onboarding.
			</motion.p>

			<motion.div variants={itemVariants} className="flex flex-col gap-6 mt-8">
				<span className="text-lg font-medium">
					Which of these best describes you?
				</span>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{ROLES.map((item) => (
						<RoleCard key={item.id} item={item} />
					))}
				</div>
			</motion.div>
		</motion.div>
	);
};

export default RoleSelection;
