import React from 'react';
import { motion } from 'motion/react';
import type { RoleSelection } from '@/types/roleSelection';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ROLES } from '@/constants';
import {
	Select,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectValue,
} from '@/components/ui/select';

const RoleSelection: React.FC<RoleSelection> = ({
	handleRoleSelection,
	selectedRole,
	formData,
	setFormData,
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
				variants={itemVariants}
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
						className={`
              text-center py-6 px-4
              flex flex-col items-center justify-center 
              cursor-pointer
              ${isSelected ? 'scale-105 text-white' : ''}
            `}
					>
						<span className="text-lg font-medium" role="button" tabIndex={0}>
							{item.name}
						</span>
					</CardContent>
				</Card>
			</motion.div>
		);
	};

	const FormSection = () => (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="space-y-8"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
				<div className="space-y-3">
					<Label htmlFor="role" className="text-sm font-medium">
						What is your role?
					</Label>
					<Input
						placeholder="Enter your role"
						id="role"
						name="role"
						className="w-full transition-all duration-200 focus:ring-2 focus:ring-primary"
						aria-label="Your role"
						value={formData.role}
						onChange={(e) =>
							setFormData((prev) => ({ ...prev, role: e.target.value }))
						}
					/>
				</div>
				<div className="space-y-3">
					<Label htmlFor="usecase" className="text-sm font-medium">
						How will you use Talenthub?
					</Label>
					<Select
						onValueChange={(e) => {
							setFormData((prev) => ({ ...prev, usecase: e }));
						}}
						value={formData.usecase}
					>
						<SelectTrigger
							id="usecase"
							name="usecase"
							className="w-full transition-all duration-200 focus:ring-2 focus:ring-primary"
						>
							<SelectValue placeholder="Select an option" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="Team">For my Team</SelectItem>
							<SelectItem value="Organization">For Organization</SelectItem>
							<SelectItem value="Quiz">Conducting Quiz</SelectItem>
							<SelectItem value="Interviews">Conducting Interviews</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
				<div className="space-y-3">
					<Label htmlFor="company_size" className="text-sm font-medium">
						Company Size?
					</Label>
					<Select
						onValueChange={(e) => {
							setFormData((prev) => ({ ...prev, company_size: e }));
						}}
						value={formData.company_size}
					>
						<SelectTrigger
							id="company_size"
							name="company_size"
							className="w-full transition-all duration-200 focus:ring-2 focus:ring-primary"
						>
							<SelectValue placeholder="Select company size" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="1-10">1-10</SelectItem>
							<SelectItem value="11-50">11-50</SelectItem>
							<SelectItem value="51-200">51-200</SelectItem>
							<SelectItem value="201-500">201-500</SelectItem>
							<SelectItem value="501-1000">501-1000</SelectItem>
							<SelectItem value="1000+">1000+</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="space-y-3">
					<Label htmlFor="platform" className="text-sm font-medium">
						How did you hear about us?
					</Label>
					<Select
						onValueChange={(e) => {
							setFormData((prev) => ({ ...prev, platform: e }));
						}}
						value={formData.platform}
					>
						<SelectTrigger
							id="platform"
							name="platform"
							className="w-full transition-all duration-200 focus:ring-2 focus:ring-primary"
						>
							<SelectValue placeholder="Select a platform" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="Linkedin">LinkedIn</SelectItem>
							<SelectItem value="Twitter">Twitter (X)</SelectItem>
							<SelectItem value="Discord">Discord</SelectItem>
							<SelectItem value="Other">Other</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
		</motion.div>
	);

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

				{selectedRole && (
					<div className="mt-8">
						<FormSection />
					</div>
				)}
			</motion.div>
		</motion.div>
	);
};

export default RoleSelection;
