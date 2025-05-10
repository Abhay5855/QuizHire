import { useState } from 'react';
import RoleSelection from './RoleSelection';
import { Card, CardFooter, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import InterviewPreferencesStep from './InterviewPreferencesStep';
import { RoleFormData } from '@/types/roleSelection';
import { RoleForm } from '@/components/features/RoleForm';
import { FormProvider, useForm } from 'react-hook-form';

const OnboardingLayout = () => {
	const [step, setStep] = useState<number>(1);
	const [selectedRole, setSelectedRole] = useState<string>('');
	const formController = useForm<RoleFormData>({
		defaultValues: {
			roleName: '',
			usecase: '',
			company_size: '',
			platform: '',
			interview: '',
		},
	});
	const nextStep = () => {
		if (step < 2) {
			setStep(step + 1);
		}
		console.log('Submit button clickee	', formController.getValues());
	};
	const previousStep = () => {
		setStep(step - 1);
	};
	const handleRoleSelection = (role: string) => {
		setSelectedRole(role);
	};
	const renderStep = () => {
		switch (step) {
			case 1:
				return (
					<div>
						<RoleSelection
							handleRoleSelection={handleRoleSelection}
							selectedRole={selectedRole}
						/>
						{selectedRole && <RoleForm />}
					</div>
				);
			case 2:
				return <InterviewPreferencesStep />;
		}
	};

	return (
		<FormProvider {...formController}>
			<div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
				<Card className="max-w-4xl rounded-lg shadow-lg p-8">
					<CardContent className="flex">
						<section>{renderStep()}</section>
					</CardContent>
					<CardFooter
						className={`flex items-center mt-4 ${step > 1 ? 'justify-between' : 'justify-end'}`}
					>
						{step > 1 && (
							<Button variant="outline" type="button" onClick={previousStep}>
								<ArrowLeft /> Back
							</Button>
						)}
						<Button
							variant="default"
							disabled={
								step < 2
									? !formController.watch('roleName') ||
										!formController.watch('company_size') ||
										!formController.watch('usecase')
									: !formController.watch('roleName') ||
										!formController.watch('company_size') ||
										!formController.watch('usecase') ||
										!formController.watch('interview')
							}
							size="default"
							type="button"
							onClick={nextStep}
						>
							{step === 2 ? 'Finish Up' : 'Continue'}
							<ArrowRight />
						</Button>
					</CardFooter>
				</Card>
			</div>
		</FormProvider>
	);
};

export default OnboardingLayout;
