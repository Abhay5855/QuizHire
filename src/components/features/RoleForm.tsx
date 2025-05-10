import { motion } from 'motion/react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../ui/select';
import { Controller, useFormContext } from 'react-hook-form';

export const RoleForm = () => {
	const { register, control } = useFormContext();
	return (
		<div className="mt-8 px-6">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="space-y-8"
			>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
					<div className="space-y-3">
						<Label htmlFor="roleName" className="text-sm font-medium">
							What is your role?
						</Label>
						<Input
							placeholder="Enter your role"
							className="w-full transition-all duration-200 focus:ring-2 focus:ring-primary"
							aria-label="Your role"
							{...register('roleName')}
						/>
					</div>
					<div className="space-y-3">
						<Label htmlFor="usecase" className="text-sm font-medium">
							How will you use Talenthub?
						</Label>
						<Controller
							name="usecase"
							control={control}
							render={({ field }) => (
								<Select
									onValueChange={(e) => {
										field.onChange(e);
									}}
									defaultValue={field.value || ''}
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
										<SelectItem value="Organization">
											For Organization
										</SelectItem>
										<SelectItem value="Quiz">Conducting Quiz</SelectItem>
										<SelectItem value="Interviews">
											Conducting Interviews
										</SelectItem>
									</SelectContent>
								</Select>
							)}
						/>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
					<div className="space-y-3">
						<Label htmlFor="company_size" className="text-sm font-medium">
							Company Size?
						</Label>

						<Controller
							name="company_size"
							control={control}
							render={({ field }) => (
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value ?? ''}
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
							)}
						/>
					</div>
					<div className="space-y-3">
						<Label htmlFor="platform" className="text-sm font-medium">
							How did you hear about us? (Optional)
						</Label>
						<Controller
							name="platform"
							control={control}
							render={({ field }) => (
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value ?? ''}
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
							)}
						/>
					</div>
				</div>
			</motion.div>
		</div>
	);
};
